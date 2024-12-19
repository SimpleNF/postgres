import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { SBNFFileParser, cleanBlank, addEnumName, addRepeatName, walk } from '@zebra/snf-parser';
import { Node, NodeType } from '@zebra/snf-parser/src/type';

const testPath = path.resolve(import.meta.dirname, '../create/*.snf');
const files = await glob(testPath);
const fileParser = new SBNFFileParser();

const addRepeatNode = (root: Node) => {
  return walk(root, {
    exchange(node, parent) {
      if (node.type !== NodeType.REPEAT_WRAP) return node;
      if (!parent.children) return node;
      const rwIndex = parent.children.findIndex((each) => each.type === NodeType.REPEAT_WRAP);
      if (rwIndex < 0) return node;
      const prevNode = parent.children[rwIndex - 1];
      node.ast = node.children;
      node.children = prevNode.children ?? [{ ...prevNode }];
      prevNode.ignore = true;
      return node;
    },
    filter(node) {
      return !node.ignore;
    },
  });
};

const collectName = (node: Node) => {
  let pathList: string[][] = [];
  let namePath: string[] = [];

  walk(node, {
    exchange(node) {
      if (node.name) {
        let name = node.name;
        if (node.type === NodeType.REPEAT_WRAP) {
          name += '[]';
        }
        namePath.push(name);
        pathList.push([...namePath]);
      }

      if (node.type === NodeType.VARIABLE) {
        pathList.push([...namePath, node.content]);
      }
    },
    back(node) {
      if (node.name) {
        namePath.pop();
      }
    },
  });

  const set = new Set();
  return pathList
    .map((namePath) => {
      return namePath.join('.');
    })
    .filter((name) => {
      if (set.has(name)) return false;
      set.add(name);
      return true;
    });
};

for (const file of files) {
  try {
    const result = await fileParser.parse(file, cleanBlank, addEnumName, addRepeatName, addRepeatNode);
    for (const each of result) {
      const names = collectName(each.ast);
      each.names = names;
    }
    fs.writeFileSync(file.replace('.snf', '.snf.json'), JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('File:', file);
    console.error((error as Error).message);
  }
}

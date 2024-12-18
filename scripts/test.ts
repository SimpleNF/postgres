import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { SBNFFileParser, cleanBlank, addEnumName, addRepeatName, walk } from '@zebra/snf-parser';
import { Node, NodeType } from '@zebra/snf-parser/src/type';

const testPath = path.resolve(import.meta.dirname, '../create/aggregate.snf');
const files = await glob(testPath);
const fileParser = new SBNFFileParser();

const collectName = (node: Node) => {
  let pathList: string[][] = [];
  let namePath: string[] = [];

  walk(node, {
    exchange(node) {
      if (node.name) {
        namePath.push(node.name);
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
      const temp: string[] = [];
      for (const name of namePath) {
        if (temp.length && temp[temp.length - 1] === name) {
          continue;
        }
        temp.push(name);
      }
      return temp.join('.');
    })
    .filter((name) => {
      if (set.has(name)) return false;
      set.add(name);
      return true;
    });
};

for (const file of files) {
  try {
    const result = await fileParser.parse(file, cleanBlank, addEnumName, addRepeatName);
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

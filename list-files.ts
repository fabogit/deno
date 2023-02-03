import { format, walkSync } from "./deps.ts";

/**
 * Writes the files inside `./dir_list.txt`
 * @param data the string to write in the file
 */
async function writiFileList(data: string) {
  console.log("Writing file...");
  await Deno.writeTextFile("./dir_list.txt", data);
  console.log("Done");
}

/**
 * Logs and counts folders and files inside a directory
 * @param directory the directory to use
 * @param deep maximum depth to which the walk should reach, dafault 1
 */
function listDirectory(directory: string, deep = 1) {
  console.log(`${format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS")}\nStart`);

  const dir = directory;
  let fsList = `Start Date:\n${
    format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS")
  }\n\n`;
  let count = 0;

  for (
    const entry of walkSync(dir, {
      maxDepth: deep,
    })
  ) {
    const path = entry.path;
    if (typeof path === "string") {
      try {
        fsList = fsList.concat(path, "\n");
        count++;
      } catch (error) {
        console.log(error);
      }
    }
  }

  fsList = fsList.concat(
    `\nEnd Date:\n${
      format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS")
    }\nTotal files:\n${count}`,
  );

  console.log(`${format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS")}\nDone`);

  writiFileList(fsList);
}

// deno run list-files.ts /myDir
// deno run list-files.ts /myDir 3
listDirectory(Deno.args[0], +Deno.args[1]);

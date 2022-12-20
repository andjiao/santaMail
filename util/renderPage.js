import fs from "fs";

export function createPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages/"+path).toString();

    return page
    .replace("%%PAGE_CSS_LINK%%",
        options.cssLink || ""
        )
    ;
}
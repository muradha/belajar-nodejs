import { URL } from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs")

pzn.host = "www.khannedy.com";


console.info(pzn.toString());
console.info(pzn.hostname);
console.info(pzn.searchParams);
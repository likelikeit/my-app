function Folder(name) {
  this.name = name;
  this.files = [];
}
Folder.prototype.add = function (file) {
  this.files.push(file)
}
Folder.prototype.scan = function () {
  for (let i = 0, file, files = this.files; file = files[i++];) {
    files.scan();
  }
}


function File(name) {
  this.name = name;
}
File.prototype.scan = function () {
  console.log(this.name)
}


let folder = new Folder('root');
let subFolder = new Folder('fronted');
let subFolder2 = new Folder('backend');
let file = new File('node');
let file2=  new File('webpack');
subFolder.add(file);
subFolder.add(file);
let backFile = new File('php');
let backFile2 = new File('go');
subFolder2.add(backFile);
subFolder2.add(backFile2);
folder.add(subFolder)
folder.add(subFolder2);
folder.scan()
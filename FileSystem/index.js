const fs=require('fs');//require the fs module

// a module is that already come along with node while a package is we have to install when it is necessary 


//file operation

//1. write operation

fs.writeFile("data.txt","hi i am sagar raj",(err,res)=>{
    if(err) console.log(err);
    else console.log("file write successfully");
})


//2. read operation

fs.readFile("data.txt","utf8",(err,res)=>{
    if(err) console.log(err);
    else console.log(res);
})

// //3. append file

fs.appendFile("data.txt","\n Hi i am sagar raj from IT department",(err,res)=>{
    if(err) console.log(err);
    else console.log("append a file successfully");
})


//4. rename a file

fs.rename("data.txt","newData.txt",(err,res)=>{
    if(err) console.log(err);
    else console.log("renamed successfully");
})



//5. make a directory or folder


fs.mkdir('Data', (err) => {
    if (err) console.error(err);
    else console.log("Directory created successfully!");
  });


//6. copy a file

fs.copyFile("newData.txt","Data/CopyData.txt",(err,res)=>{
    if(err) console.log(err);
    else console.log("file copied successfully");
})


// 7. delete a file

fs.unlink("./Data/CopyData.txt",(err,res)=>{
    if(err) console.log(err);
    else console.log("file is deleted successfully");
})
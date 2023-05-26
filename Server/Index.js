const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const { exec } = require('child_process');
const html_tablify = require('html-tablify');

app.get("/allService",(req,res)=>{
    exec(`Get-Service |Select-Object DisplayName, @{ n='Status'; e={ $_.Status.ToString() } }| ConvertTo-Json`, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
        res.send(stdout);
        console.log(stdout);
});   
});

app.get("/WSearch_Service",(req,res)=>{
    exec(`Get-Service WSearch |Select-Object Name, DisplayName, @{ n='Status'; e={ $_.Status.ToString() } }| ConvertTo-Json`, {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
        res.send(stdout);
        
});  
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
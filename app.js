#!/usr/bin/env node

const child = require('child_process');

//创建子进程
const child_server = child.fork('./server.js');
const path = require('path');

const fs = require('fs');


let filename = path.join(__dirname, process.argv[2]);

createChile()
function createChile() {
    console.log('ll')

}


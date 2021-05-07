#!/bin/bash

tar czf vfix-backend.tar.gz database routes app.js package.json
scp vfix-backend.tar.gz majid:~
rm vfix-backend.tar.gz

ssh majid << 'ENDSSH'
pm2 delete vfix-backend
rm -rf vfix-backend
mkdir vfix-backend
tar xf vfix-backend.tar.gz -C vfix-backend
rm vfix-backend.tar.gz
cd vfix-backend
npm i
pm2 start npm --name "vfix-backend" -- start
ENDSSH

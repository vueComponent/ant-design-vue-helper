#!/bin/bash

echo $1
mkdir out
cd out
mkdir config
cp -r ../src/config/** ./config/
cd ..

tsc $1 -p ./
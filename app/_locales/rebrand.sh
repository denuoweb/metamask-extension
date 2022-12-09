#!/bin/sh
find . -type f -exec sed -i 's/MetaMask/Altmasq/g' {} +
find . -type f -exec sed -i 's/21000/22000/g' {} +


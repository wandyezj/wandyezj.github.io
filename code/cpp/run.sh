file=./test;

if [ -e $file ] ; then
    rm $file
fi
clang++ -Wall -std=c++11 combine_node_list.cpp -o $file


if [ -e $file ] ; then
    $file
fi

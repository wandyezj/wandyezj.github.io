#!/bin/bash

# extract zip files and place extrac to s

if [ $# -ne 2 ]
then
	echo "Usage: [input directory with zips] [output directory]"
fi

directory_input=$1
directory_output=$2

echo "search: $directory_input"
echo "out: $directory_output"

if [[ ! -d "$directory_input" ]]
then
	echo "extract directory not found: $directory_input"
fi

if [[ ! -d "$directory_output" ]]
then
	echo "extract directory not found: $directory_output"
	echo "creating..."
	mkdir "$directory_output"
fi

# do extraction
for item in "$directory_input"/*
do
	if [[ $item == *.zip ]]
	then
		#echo "(ZIP) $item";
		simple=$(basename "${item}" .zip)
		echo "      $simple";
		out="$directory_output/$simple"

		# only unzip if not already there
		if [[ ! -d "$out" ]]
		then
			mkdir "$out"
			unzip -qq "$item" -d "$out"
		fi

	else
		echo "      $item";
	fi
done



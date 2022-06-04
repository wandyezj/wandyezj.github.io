#!/bin/bash

# extract multiple specific subfolders in a directory to a common folder

if [ $# -ne 3 ]
then
	echo "Usage: [input directory with directories] [filter] [output directory] [subdirectory target]"
fi

directory_input=$1
directory_input_filter=$2
directory_output=$3
subpath=$4

echo "root: $directory_input"

# do extraction
for item in "$directory_input"/*
do
	simple=$(basename "${item}")

	if [[ $simple == $directory_input_filter ]]
	then
		echo "    $simple";

		specific="$item/$subpath"

		echo $specific
		if [[ -d "$specific" ]]
		then
			./extract.sh "$specific" "$directory_output"
		fi

	fi
done
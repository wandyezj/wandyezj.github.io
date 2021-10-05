sub ReadLines {
    my $inputFile = $_[0];

    open my $in, '<', $inputFile or die "Can't read file $inputFile: $!";
    my @lines;
    while (<$in>)
    {
        push @lines, $_;
    }
    close $in; 
    return @lines
}

# usage
my $filelines = ReadLines($filepath);
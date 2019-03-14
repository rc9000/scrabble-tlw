#!/usr/bin/perl -n

chomp;
#print "input:::: $_ \n";

if (m/"word": "(.*?)"/){
    my $v = `egrep ^$1 meanings.txt`;
    chomp $v;
    $v =~ s/^..\s+//;
    $v =~ s/"/'/g;
    #print " lookup $1   /$v/\n";
    $_ =~ s/fixme/$v/g if $v;
    print $_."\n";
}



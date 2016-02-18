node toJSON < test1-input.txt | diff - test1-output.txt 
if [[ $? == 0 ]]; then
	echo "Test was successful ($?)"
else
	echo "Test failed"
fi

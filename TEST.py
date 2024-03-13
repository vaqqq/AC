#put "bad file" anywhere in the files array
#"@nexawicker"

allowedFiles = ["file1", "file2", "file3", "file4", "file5", "file6"]
files = ["file1", "file2", "file3", "file4", "file5", "file6", "bad file"]
correctFiles = 0

if len(files) == len(allowedFiles):
    print("no suspicious files")
else:
    for i in range(len(allowedFiles)):
        if files[i] == allowedFiles[i]:
            correctFiles += 1
            if correctFiles == len(allowedFiles):
                print("incorrect file at position", str(len(allowedFiles) + 1))
        else:
            print("incorrect file at position", i + 1)
            break
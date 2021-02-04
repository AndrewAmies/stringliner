exports.toLines = function(str) {
  // Check that input is a string

  // Create array from string split on line breaks and carriage returns
  const lines = str.split(/[\n\r]/);
  console.log("Initial split: " + lines);

  //  Trim array and remove blank lines (unless option to include them is true)
  for (i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === "") {
      lines.splice(i, 1);
    } else {
      lines[i] = lines[i].trim();
    }
  }
  console.log("After trim: " + lines);

  // Return array
  return lines;
};

// Upgrade to use callback with error and result parameters

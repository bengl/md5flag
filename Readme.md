md5flag
=======
**md5flag** is a command-line tool for generating "[free speech flag][1]"-style flag out of the md5 hash of a given innput string or file.  It's also available in a [web page][2].

Installation
------------
Use npm:

    $ npm install -g md5flag

Usage
-----
Dead easy:

    $ md5flag [-p|--png] <file|string>
    
The <code>-p</code> or <code>--png</code> flag will generate a file in the current directory with the name 

    <md5 hash of the file or string>.png

With or without the flag, a preview will be generated using ANSI colors.

License
-------

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>

  [1]: http://www.badmouth.net/free-speech-flag/
  [2]: http://bengl.github.com/md5flag/

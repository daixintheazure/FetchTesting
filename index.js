import fetch from 'node-fetch';
import { parse } from 'node-html-parser';


fetch("https://palworld.fandom.com/wiki/Paldeck")
.then (res => res.text()) // get the HTML content as text
  .then(html => {const root = parse(html); // Parse the HTML
                // Now, you can manipulate the DOM using the 'root' which repesents the root of the parsed HTML document
                 //for example, to find all the links on the page, in a div with specified class you could do:
                 const links = root.querySelectorAll('div.floatnone > a');
                 links.forEach(link => {
                   console.log(link.getAttribute('href'));
                   // Print the href attribute of each link
                 });
                })
.catch(err => console.error(err));
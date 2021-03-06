//var debug = true;

// Find and replace
/*
var inputs = ["I gave one final glance around before descending from the barrow. As I did so, my eye caught something, not a shape, but a movement beyond a cluster of trees. I crouched low and stared at it, trying to resolve what I had seen. In a few moments, the animal emerged. A horse. Black and tall. Myblack. She stared toward me. Slowly I stood again. She was too far off to go chasing after her. She must have fled when the Piebalds captured Nighteyes and the Fool. I wondered what had become of Malta. I watched her for a moment longer, but she only stood and stared back at me. I turned my back on her and descended to the Prince."];
var reward = 0.10;
var redundancy = 5;
var title = "Make my novel present tense";
var subtitle = "I need to change some prose from past to present tense";
var instructions = "I am changing this section of my novel from the past tense to the present tense. Please read and fix to make everything present tense, e.g., &quot;Susan swerved and aimed the gun at her assailant. The man recoiled, realizing that his prey had now caught on to the scheme.&quot; becomes &quot;Susan swerves and aims the gun at her assailant. The man recoils, realizing that his prey had now caught on to the scheme.&quot;";
*/

// Figures
/*
var inputs = ["When I first visited Yosemite State Park in California, I was a boy. I was amazed by how big everything was: the rocks were big, the trees were big, the animals were big. But the biggest thing around by any measure is Half Dome, the granite mountain that looks like it was sheared in half. It's no wonder that John Muir worked so hard to save the park."]
var reward = 0.20
var redundancy = 5;
var title = "Need a Creative Commons image";
var subtitle = "I need to illustrate a paragraph with an image";
var instructions = "I need a Creative Commons image to use to illustrate this paragraph. Please provide a URL for the image, and evidence that it is actually licensed as Creative Commons.";
*/

// Opinions
/*
var inputs = ["Take a look at your computer. Think about how you launch programs, edit documents, and browse the web. Don't you feel a bit lonely? There are millions of people using the same software you use, but your computer interface only hears one of them: you. Every time you launch a program or write an email, you do it in a void. Those millions of people have probably done exactly what you're doing -- maybe even more skillfully than you! -- but your computer doesn't really care."]
var instructions = "What's the weakest part of the argument outlined in this paragraph? How could I improve it?";
var reward = 0.15
var redundancy = 5;
var title = "Opinions on my blog post";
var subtitle = "What could I do to make it more persuasive?";
*/

// Citation gathering
/*
var inputs = ["Research on Mechanical Turk is growing quickly. Artificial Intelligence researchers have latched onto Mechanical Turk as a means of collecting labeled training data on the cheap. This approach produces results comparable to expert labeling [o'connor emnlp cheap and easy but is it...]. Kittur et al. [Crowdsourcing user studies on mturk] found that Turk-led user studies produce reliable data when the experimenter includes an additional, verifiable question that requires the worker to pay attention to the task, for example summarizing a paragraph in a sentence. Duncan and Watts [Duncan and watts HCOMP 09 anchoring] found that Turkers will do more work when you pay more, but that the quality is no higher."]
var instructions = "This paragraph has citation descriptions like [miller automating the web] sprinkled through it. For each, please search Google Scholar and return the citation in BibTeX format.  (Google Scholar preferences lets you turn on import links for BibTeX.  Once that's on, just click it in the search results.)";
var reward = 0.35;
var redundancy = 5;
var title = "Google Scholar search";
var subtitle = "Search Google scholar for some citations and give me the results.";


// List processing

var inputs = ["Michael Burns, 32 vassar st., 02139", "Netta Rubers, 2 woodfall, irvine ca", "George Carlo, 56 S Raymond Ave 91105", "Jeff David, 1 LMU Drive, Malone 402, Los Angeles CA 90045", "Randy Tan, 2312 2nd ave, seattle", "Mary Little, 5839 westheimer rd, Houston", "Max Marcus, 3416 colfax ave east, 80206", "Sanjay Kedia, 1945 e 17 st #108, santa ana ca", "Mark Winograd, 3475 s las vegas blvd, las vegas", "Hiroshi Uematsu, 682 union st, Brooklyn ny"];
var instructions = (<div>Standardize these mailing addresses. You might need to look up zip codes. I need it in the format:<br />
NAME<br />
STREET ADDRESS<br />
STREET ADDRESS LINE 2 (if necessary)<br />
CITY, STATE ZIPCODE<br /><br />
http://zip4.usps.com/zip4/ will be useful, and maps.google.com might help in case I didn't spell the street name quite right.
</div>).toXMLString();
var reward = 0.05;
var redundancy = 5;
var title = "Address Fixing";
var subtitle = "I have some badly-formatted addresses and need help making them look right.";
*/

eval(read(fileDirectory + "/templates/human-macro/macro.js"));
main();
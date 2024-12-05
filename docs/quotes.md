---
layout: page
title: Quotes
permalink: /quotes/
---

{% assign quotes = site.quotes %}
{% for item in quotes %}
{% assign quote = item.quote | strip | escape %}
{% assign author = item.author | strip | escape %}
{% assign from = item.from | strip | escape %}

{% if author == empty %}
"{{ quote }}"
{% elsif from == empty %}
"{{ quote }}" - {{ author }}
{% else %}
"{{ quote }}" - {{ author }} - {{ from }}
{% endif %}


{% endfor %}



"Any telling of history is biased, for history is vast, sometimes unknown, and there is only so much time."

"With shared responsibility, no one is responsible." from The New Economics For Industry, Government, Education by W. Edwards Deming

"The function of government should be to work with business, not to harass business." from The New Economics For Industry, Government, Education by W. Edwards Deming

"What is the oracle of truth? In antiquity it was those that spoke to the gods. For scientists it is what can be reproduced. For engineers it is a design that fits the requirements when tested in the world. For business it is the market. For lawyers it is the courtroom. For politicians in democratic societies it is votes."

"I know you Lawyers can, with Ease, Twist Words and Meanings as you please; That Language, by your Skill made pliant, Will bend to favour ev'ry Client" - Benjamin Franklin from The Lawyers Guide to Writing Well by Tom Goldstein

"I’d rather know a little less than to know so much that isn’t so. —Josh Billings" from The New Economics by W. Edwards Deming

"It seemed not just odd but undemocratic to want tech companies to police the government" from Tools and Weapons by Brad Smith

"as we think about the future of higher education, we'll need to make certain that every computer and data scientist is exposed to liberal arts, just as everyone who majors in the liberal arts will need a dose of computer and data science" from Tools and Weapons by Brad Smith

"There is no end to learning."

"Speed limits are more likely to be remembered if they apply to an entire district and the signs say so" from Walkability Rules by Jeff Speck

"None of our public officials has ever asked the question: will this public project generate enough tax revenue to sustain its maintainance over multiple lifecycles" from Walkability City Rules by Jeff Speck

"writing down decisions is essential. Only when one writes do the gaps appear and inconsistencies protrude " from The Mythical Man Month by Frederick P. Brooks

"Censorship is admittance of intellectual weakness. Refusing to allow or consider another point of view is admittance that ones view or ability to explain it is weak."

"Having everyone participate and question the actions serves several roles simultaneously. The very ambiguity, the continual questioning and debate keeps everyone in touch with the activity, thereby providing redundant checks on the actions. This adds to the safety, for now it is likely for errors to get detected before they have caused problems." from The Invisible Computer by Donald A. Norman

"The best procedures will mandate outcomes, not methods" from The Invisible Computer by Donald A. Norman

"Here we are, wandering about the world, bumping into things, forgetful of details, with a poor sense of time, a poor memory for facts and figures, unable to focus attention on a topic for more than a short duration, reasoning by example rather than logic, and drawing upon our admittedly deficient memories of prior experience" from The Invisible Computer by Donald A. Norman

"In the world's marketplaces, technical quality is only one of many variables." - from The Invisible Computer by Donald A. Norman

"It isn't possible to infer intentions from actions." "There simply isn't enough information in a person's actions." - from The Invisible Computer by Donald A. Norman

"The world must bend to the architecture or the architecture must bend to the world."

"In order to produce better systems, a society should be less concerned with producing material goods in increasing quantities than with producing people of better quality" - Claude Levi-Strauss from Kaizen by Masaaki Imai

"one conceptualization of politics . . . is the authoritive allocation of values" - from Public Policy Scope and Logic by Fred M. Frohock

"The best people to help design a product so that it does to need a manual are the technical writers who today write the manuals. They know the difficulties people face. They understand how difficult it is to explain the products. They can help design products that are easy to explain, if not self-explanatory" from Living with Complexity by Donald A. Norman

"People learn by doing. Telling people what to do is not nearly as effective as coaching them as they do it." - from Living with Complexity by Donald A. Norman

"Most people want "just-in-time" learning. People learn best when they have a need to learn." - from Living with Complexity by Donald A. Norman

"Every application has an inherent amount of complexity. The only question is who will deal with it, the user or the developer (programmer or engineer)." (Tesler and Saffer 2007) from Living with Complexity by Donald A. Norman

"There is always an easy solution to every problem - neat, plausible, and wrong." - H. L. Mencken (1917) - from Living with Complexity by Donald A. Norman

"Smart machines of the future should not try to read the minds of the people with whom they interact, either to infer their motives or to predict their next actions. The problem with doing this is twofold: first, they probably will be wrong; second, doing this makes the machine’s actions unpredictable. The person is trying to predict what the machine is going to do while, at the same time, the machine is trying to guess the actions of the person—a sure guarantee of confusion." - Don Norman

“Once designs are thought of as shared communication and technologies as media, the entire design philosophy changes radically, but in a positive and constructive way” -Don Norman

"To avoid offense, speech must become sterile or people must become tolerant."

""In Chromatica no one thing is greater than another" In chromatica, sorting is impossible."

"People are moths drawn to the light of story. Liberal arts floats in light, while technical education drowns in darkness. I hope more engineers learn to light candles."

"It is hard to walk the path of an artist; for an artist must construct their own meaning."

"If not us, who?" "If not now, when?" - Ronald Regan

"Government cannot solve our problems" "It cannot eliminate poverty or provide a bountiful economy, or reduce inflation, or save our cities, or cure illiteracy, or provide energy" - Jimmy Carter

"Our constitution works. Our great republic is a government of laws and not of men. Here the people rule." - Gerald R Ford

"Do you run towards difference to embrace it, or do you run away to escape it?"

"Everyone's for Diversity and Inclusion until they need to include someone with a different background and experience that disagrees with them."

"The world must be simplified to give any semblance of certainty. Hence the spherical cow."

"There are two ideas of government. There are those who believe that, if you will only legislate to make the well-to-do prosperous, their prosperity will leak through on those below. The Democratic idea, however, has been that if you legislate to make the masses prosperous, their prosperity will find its way up through every class which rests upon them." - William Jennings Bryan 1896

"Spontaneous order is what happens when you leave people alone—when entrepreneurs... see the desires of people... and then provide for them.
They respond to market signals, to prices. Prices tell them what's needed and how urgently and where. And it's infinitely better and more productive than relying on a handful of elites in some distant bureaucracy." - Lawrence Reed

"I didn't destroy it; I created smaller pieces."

"Warning: Fact Free Zones!
Bold Assertions! Unsubstantiated Claims!
Now entering party conventions, you have been warned!"

"Do you differentiate between ∀ and ∃?"

"Can't we just all get along" - Rodney King

"If you were plowing a field, would you rather use: two strong oxen or 1024 chickens?"

"The life you lead is up to you. Your purpose is yours to define. Collectively our lives build the cultural current; hurtling us towards the future."

"As the school helps young people to take on the nature of adulthood, it will still do so by helping them to enter adequately into the activities of adulthood. Youth will learn to think, to judge, and to do, by thinking, judging, and doing. They will acquire a sense of responsibility by bearing responsibility. They will take on serious forms of thought by doing the serious things which require serious thought." - What the Schools Teach and Might Teach by John Franklin Bobbitt 1915

"There should be progressive differentiation of courses to meet the widely varying needs of the different sorts of children" - What the Schools Teach and Might Teach, by John Franklin Bobbitt 1915

"With iterative design, there is no failure - just iterations with lessons learned to apply to the next iteration. Accordingly, failure is not to be feared but embraced." - The Pocket Universal Principles of Design

"Beware of feature creep in design and development. Ensure features are linked to customer needs, and are not added out of convenience or appeasement. Create a milestone to formally freeze the product specification, and shout "feature creeper" at any person attempting to add features beyond that point." - The Pocket Universal Principals of Design

"Incompetent people lack the knowledge to recognize their own incompetence, as well as the competence of others" - The Pocket Universal Principals of Design

"You can have everything in life you want, if you will just help other people get what they want." - Zig Ziglar

"The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it." - Mark Weiser

"granola is a thousand tiny cookies" - wandyezj 2024

"Television’s advocacy of individual gratification through romance and consumption of material goods is not balanced by advocacy of thrift or of work." from Language in Thought and Action by Hayakawa

"Architecture shouldn't be global; architecture needs to be local to respond to specific microclimates and social conditions." from Design for a Better World by Don Norman

"We could, but we don’t have to, and maybe we shouldn’t" - wandyezj 2024

"I did it for the pure joy of the thing. And if you can do it for joy, you can do it forever" - Stephen King

"When you really look at something, and think about it, everything becomes funny." wandyezj 2024

“To err is human, to forgive design.” from Designing Usable Electronic Text by Andrew Dillon

"Engineers look for problems because fixing problems and making things better is their life’s work." wandyezj 2024

"It’s best to eliminate problems permanently if possible. That way you can confidently move on to new problems." wandyezj 2024

"English is my favorite programming language: it’s flexible, and you can blame the interpreter." wandyezj 2023

“Does it spark joy or regret?” “Both” wandyezj 2023

“Putting things away creates the illusion that the clutter problem has been solved” from the life-changing magic of tidying up by marie kondo

"Stop waiting for people to give you a trophy. Make your own trophies to celebrate your accomplishments." wandyezj 2023

“Concentrated power is not rendered harmless by the good intentions of those who create it” from Capitalism and Freedom by Milton Friedman

"If you want control you need to be the one making things." wandyezj 2023

“Tiger got to hunt, bird got to fly;
Man got to sit and wonder 'why, why, why?'
Tiger got to sleep, bird got to land;
Man got to tell himself he understand.”
― Kurt Vonnegut, Cat’s Cradle

"Look good. Feel good. Do good."

"All people know the use of the useful, but nobody knows the use of the useless." - Zhuangzi

"Nothing is difficult, everything is figuroutable"

"The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful." - Oscar Wilde

"The gross national product does not allow for the health of our children, the quality of their education, or the joy of their play … It measures neither our wit nor our courage, neither our wisdom nor our learning, neither our compassion nor our devotion to our country; it measures everything, in short, except that which makes life worthwhile." - Robert F. Kennedy

“Convivial tools are even more powerful if instead of each tool being built in isolation of the others, it is built to follow some standard guidelines and principles, so that the knowledge of how to work one tool is readily transferred to others, thus amplifying the power of individual tools to empower everyone.” — Design for a Better World: Meaningful, Sustainable, Humanity Centered by Donald A. Norman
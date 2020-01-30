# Computer Science Course Administration

## Inspiration

I've had the privilege of having many professors.

I've seen a variety of course structures and techniques.

I'd like to share what I consider most convenient teaching practices.

## Spend as much time answering original questions as possible

Answering the same student questions again is a waste of time.

Every time a student asks a question add it to a wiki or FAQ page for the course. When a student asks a similar question in the future you can send them a link to the specific FAQ page.

Consider 

Keep a list of common questions students a


## A Place for everything and everything in it's place

One Place For all Class Materials and Schedule

- Recorded Lectures
- Slides
- Notes
- Homework
- Materials

Due dates should be set at the beginning of the course
Class P

## Virtual machine images, savior of setup time

These days students use a variety of desktop environments {windows, mac, linux}.

If the course uses specialized software that is not available on all environments, consider creating a Virtual Machine image students can load on their computers that contains everything needed for the course. If you are well prepared, the image can contain all materials {lectures, slides, homework} needed for the course (this will save you from many student questions).

[Virtual Box](https://www.virtualbox.org/) is a good candidate for creating, and running virtual machine images.

[Ubuntu](https://ubuntu.com/) is a good candidate for the course operating system. If you embrace the Free Software Movement then consider one of the [Free Linux OSs](https://www.gnu.org/distros/free-distros.html).

When building the Virtual Machine keep a list of every action you take to install software or copy files onto the OS, this will help you set up the OS in the future f you need to upgrade something in the course. The list can also be provided to students if there is another environment that they would prefer.

Once the Virtual Machine is set up Export the Virtual Machine to provide the starter image, and to provide a base if you need to add something later. This lets you grade students assignments on the same setup that they are using (preventing annoying questions).

Make sure everything you expect students to do in the course works on the Virtual Machine image before it is distributed to students (preventing annoying questions)

## Common Software

### Text Editors

- Visual Studio

- Visual Studio Code

- Notepad++

- Vim

## Diagrams

[Mermaid](https://mermaid-js.github.io/mermaid/#/)
- Mermaid has a Visual Studio Code Extension that can render diagrams
- Mermaid is supported in Visual Studio Online wiki formats

Plant UML

## Reports

Markdown

[Latex](https://www.latex-project.org/) + [teXstudio](https://www.texstudio.org/)

- Consider Markdown before Latex if it meets course needs.
- Latex is notoriously difficult to install, so make sure to include it in the image if it is required.
- Latex has a steep learning curve.
- Latex can be converted to PDF using Latex to PDF.

PanDoc

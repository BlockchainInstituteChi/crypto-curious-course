# Blockchain Institute Crypto Curious Course Slide & Notes Generator

This repo contains the core code for generating the Crypto Curious Course slides in a variety of formats. 

# Adding Slides
To add a slide, open a template file and save it with a new name to `_collections/_slides/`. Names should start with a slide number and contain a clear description of the slide content.

# Slide Types & Templates
Each slide will be generated using a template from the _includes folder. To see the full algorithm check index.html. Template files for each slide type are also stored in the folder at `_collections/_slides/.templates/`.

## Title Break
The title slides are the simplest of all. Notes are optional, and these will be shown automatically in the Table of Contents as section headers.

< insert screenshot of format example here > 

## Full Image
One title, one image - it doesn't get any easier. Notes are optional but recommended.

< insert screenshot of format example here >

## Full Text
Text only. Specify a blob of text to show it below the title. 

< insert screenshot of format example here >

## Left Right 
Text on the left, image on the right. Useful for explaining keywords or recapping earlier lessons.

< insert screenshot of format example here >

## Top Bottom
Got extra-wide images? Put your text area at the top, and show an image underneath!

< insert screenshot of format example here >

## Prompt Question
Just like a title slide, but with a pink background and a question mark?

< insert screenshot of format example here >

## Custom
Anything goes - just enter a blob of multi-line HTML or markup text, and you can create your very own slide format for special cases like iframe'd videos or code samples!

< insert screenshot of format example here >


# Slide Attributes 
Each slide can have a range of attributes specified, which control how they are generated and how content is handled.

## Default Attributes
All slides will have the following:
```
title : String - header title
slideId : String - contains nav index
type : String (title-break, full-image, full-text, left-right, top-bottom, prompt-question, or custom)        
notes : |
    Mutli-Line 
    String
    Supports <html>
    Use spaces ( ) to indent, not tabs!
```

## Image Slides 
*NOTE:* There are three types of image slides, full-image, left-right or top-bottom.

You can specify the image to load like so:
```
img : String - name of an image file in /assets/img/
imgTitle : String - the title text for the image
imgAlt : String - the Alt text for the image
imgCaption : String - HTML Formatted string for the caption
```

### Adding Images
You will also need to make sure the image has been added to `/assets/img/`. Subfolders work fine, but make sure you include it in the `img` field.

### Example
i.e. an image at `/assets/img/crazyPhotos/dog_using_computer.png` could be shown by adding the following attributes:
```
img : "crazyPhotos/dog_using_computer.png"
imgTitle : "Dogs can blockchain too!"
imgAlt : "Dog using computer."
imgCaption : "And from that day on, WoofCoin wouldn't be just a crazy idea."
``` 

## Slides With Text
For slides that show text in the page, you'll want to use the multi-line 'bodyText' attribute as shown below.

*Note:* While full-text slides are the main use case for this, left-right and top-bottom slides also use the bodyText attribute.
```
bodyText : |
    multi-
    line
    text
```

## Slide Tags

If a slide is a discussion point, flag it so that it will be shown in the table of contents. The prompt-question slide type will automatically receive this handling.
```
isQuestionSlide : Boolean ( true or false - optional )

ex:
isSectionHead: true # this slides' title will be shown in pink in the table of contents

```

When a slide should be show in the table of contents as a section header, you can also toggle the isSectionHead tag by adding it as shown below. The title-break slide type will automatically receive this handling.
```
isSectionHead : Boolean ( true or false - optional )

ex:
isSectionHead: true # this slides' title will be shown in teal in the table of contents
```

---





## About
This site uses the [Jekyll templating engine](https://jekyllrb.com/) to generate static HTML pages and hosts them using Github pages from the `master` branch of this repo.

Jekyll uses a combination of [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), CSS, and raw HTML to generate pages. 

***Commits made to the master branch of this repo will trigger a github pages build, which will go live after 2-3 minutes!***

## Local Setup Instructions For Contributors
If you're not comfortable setting up the repo locally, [Click Here](https://github.com/BlockchainInstituteChi/weteachblockchain.org/blob/master/CONTRIBUTORS_GUIDE.md) for the full instructions to configure VSCode and Github Desktop. The process takes about 15 minutes, and then you'll be ready to start contributing full features!

# Instructions

## Local Testing
To build the site locally, you must first clone the github repo, and then install the ruby gems and run Jekyll build. Be sure to update your version of ruby to the latest available.

```
# clone the repo
git clone git@github.com:BlockchainInstituteChi/crypto-curious-course.git

# enter the directory
cd crypto-curious-course

# install gems 
bundle install

# build jekyll to deploy statically
bundle exec jekyll build

# or serve jekyll locally
bundle exec jekyll serve
```

** Depending on your Jekyll install, it is possible to skip typing `bundle exec` and simply type the Jekyll commands.

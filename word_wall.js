info = [
    {
        word: 'programming language',
        meaning: 'There are many programming languages used to write software. Some of most popular are python, java, javascript, c#'
    },
    {
        word: 'framework',
        meaning: 'It provides a foundation on which software developers can build programs for a specific platform. A framework may also include code libraries, a compiler, and other programs used in the software development process.'
    },
    {
        word: 'front end',
        meaning: 'making the graphical interface the users interact with. For example this website'
    },
    {
        word: 'back end',
        meaning: ' The back end gives the front-end the data that it needs'
    },
    {
        word: 'back end',
        meaning: ' The back end gives the front-end the data that it needs'   
    },
    {
        word: 'full stack',
        meaning: 'A full stack developer is a web developer or engineer who works with both the front and back ends of a website or application'   
    },
    {
        word: 'database',
        meaning: 'a structured set of data held in a computer, especially one that is accessible in various ways.'
    },
    {
        word: 'json',
        meaning: "{meaning: 'JavaScript Object Notation is an open-standard file format or data interchange format that uses human-readable text to transmit data objects consisting of attribute–value pairs and array data types.'}"
    },
    {
        word: 'server',
        meaning: ' computer or computer program which manages access to a centralized resource or service in a network.'
    },
    {
        word: 'terminal',
        meaning: 'Interface that allows typing in compands to computer. '
    },
    {
        word: 'git',
        meaning: 'Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers'
    },
    {
        word: 'github',
        meaning: 'GitHub is a global company that provides hosting for software development version control using Git. '
    },
    {
        word: 'commit',
        meaning: 'The "commit" command is used to save your changes to the local repository.'
    },
    {
        word: 'push',
        meaning: ' The git push command is used to upload local repository content to a remote repository.'
    },
    {
        word: 'pull',
        meaning: 'Git command used to update the local version of a repository from a remote'
    },
    {
        word: 'merge',
        meaning: 'The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch'
    },
    {
        word: 'html',
        meaning: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.'
    },
    {
        word: 'css',
        meaning: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML'
    },
    {
        word: 'bootstrap',
        meaning: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.'
    },
    {
        word: 'javascript',
        meaning: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js'
    },
    {
        word: 'jquery',
        meaning: 'jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. '
    },

];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

info.forEach(element => {
    word = $(`<div class="col"><p>${element.word}</p></div>`);
    // add stypling to word

    word.css('color', getRandomColor());
    word.css('font-size', '30px');
    word.css('margin', '25px');
    

    //wire up word for on hover
    word.mouseover(function () {
        // enlarge word
        $(this).css('font-size', '35px');

        $('#info-box').text(element.meaning);
    });

    word.mouseleave(function(){
        $(this).css('font-size', '30px');
    });

    $(`.row-${Math.floor(Math.random() * 5 + 1)}`).append(word);
});
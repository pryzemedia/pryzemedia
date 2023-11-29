import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiCardsComponent} from "../../components/reusable/multi-cards/multi-cards.component";
import {showcaseItem} from "../../components/data/general-interface";

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonModule, MultiCardsComponent],
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit{

  webPortfolio: showcaseItem[] = [];

  initCarouselData(): void{
    this.webPortfolio = [
      {
        imgSrc: "assets/img/web/mcafee.jpg",
        imgAlt: "Screenshot of the McAfee website",
        heading: "McAfee Website Localization Project",
        desc: "Collaborated with the Marketing Department's " +
          "website team to revamp 42 distinct cultural websites on McAfee.com, " +
          "aligning them with the new Zitouna design. Leveraged Adobe Experience Manager (AEM) CMS to refine " +
          "Experience Fragments, HTML, and CSS, ensuring that adjustments mirrored the design of the US site " +
          "across diverse language versions. The comprehensive updates transpired during the 2nd - 3rd quarter of 2020.",
        desc2: "Utilized Technologies: Adobe Experience Manager, Bootstrap Framework, HTML5/CSS, JavaScript, and jQuery",
        link: "http://mcafee.com",
        linkText: "View Website"
      },
      {
        imgSrc: "assets/img/web/spinning-wheel.jpg",
        imgAlt: "Screenshot of the Spinning Wheel Game",
        heading: "Interactive Learning Activity: Spinning Wheel Game",
        desc: "Crafted as a dynamic learning component seamlessly integrated into McAfee SCORM courses.",
        desc2: "Utilized Technologies: HTML5/CSS, Bootstrap 3.5, JavaScript, jQuery",
        link: "http://pryzemedia.com/clients/mcafee/gamification/spinning-wheel/",
        linkText: "View Demo"
      },
      {
        imgSrc: "assets/img/web/scenario.jpg",
        imgAlt: "Screenshot of the McAfee Scenario Game",
        heading: "Sales Training Scenario Game Demo",
        desc: "Created exclusively for McAfee's sales training in SCORM HTML courses, this immersive " +
          "scenario game enables course designers to emulate authentic sales challenges. Sales representatives " +
          "navigate objections, choosing from three response options and receiving customized feedback.",
        desc2: "Utilized Technologies: HTML5/CSS, Bootstrap 3.5, JavaScript, jQuery",
        link: "http://pryzemedia.com/clients/mcafee/gamification/scenario",
        linkText: "View Demo"
      },
      {
        imgSrc: "assets/img/web/flashcard.jpg",
        imgAlt: "Screenshot of the McAfee Flashcard Game",
        heading: "Flash Card Challenge Game",
        desc: "Developed for McAfee training, the Flash Card Challenge application seamlessly integrates HTML5, " +
          "the Bootstrap 3.5 framework, and custom JavaScript. This versatile tool found reuse across various SCORM " +
          "training courses at McAfee. Envisioned from the concept of flashcards for effective term and definition " +
          "memorization, the application features two modes: the standard flashcard mode and an engaging speed round mode.",
        desc2: "Utilized Technologies: HTML5/CSS, Bootstrap 3.5, JavaScript/jQuery",
        link: "http://pryzemedia.com/clients/mcafee/gamification/flashcard/",
        linkText: "View Demo"
      },
      {
        imgSrc: "assets/img/web/Miro.jpg",
        imgAlt: "Screenshot of the Miro Apartments Dallas Website",
        heading: "Miro Apartments Dallas Website Development",
        desc: "Crafted for Fource Communications, the Miro Apartments website is a testament to seamless design and functionality. " +
          "Utilizing the MODx Revolution Content Management System, the site incorporates the Bootstrap 3.3 responsive design framework, " +
          "along with HTML5 and jQuery. The Neighborhood page features a customized version of the jQuery jLocator Plugin, offering a " +
          "unique display of businesses surrounding Miro Apartments, complete with a custom Miro icon through Google's Map API. " +
          "Project Initiation: September 2015.",
        desc2: "Utilized Technologies: PHP, MySql, XHTML/CSS, JavaScript",
        link: "",
        linkText: ""
      },
      {
        imgSrc: "assets/img/web/universityFurnishings.jpg",
        imgAlt: "Screenshot of the University Furnishings Website",
        heading: "University Furnishings Website Development",
        desc: "During a contract with Dodd Creative, I spearheaded the creation of the University Furnishings website. " +
          "The site, built with PHP, MySql, XHTML/CSS, and JavaScript, boasts animated headers optimized for " +
          "seamless viewing on iPhone, iPad, and iPod Touch. Leveraging PHP and MySql, all product sections are " +
          "dynamically driven by a database. Project Initiation: 07-02-2010.",
        desc2: "Utilized Technologies: PHP, MySql, XHTML/CSS, JavaScript",
        link: "",
        linkText: ""
      }
    ]
  }
  ngOnInit() :void{
    this.initCarouselData();
  }
}

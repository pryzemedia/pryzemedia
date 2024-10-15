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

  InitWebData(): void{
    this.webPortfolio = [
      {
        imgSrc: "assets/img/web/cm-home.png",
        imgAlt: "Screenshot of the CounterMeasures HTML Mock-up",
        heading: "CounterMeasures HTML Mock-up Project",
        desc: "Crafted a bespoke HTML mock-up, meticulously tailored to fulfill the unique needs of the client. " +
          "The mock-up is intricately designed, adhering to the latest design web standards and leveraging the " +
          "Bootstrap 5 HTML Framework. This served as the foundation for constructing the Angular application." +
          " || The Angular Prototype integrates the HTML design from the CounterMeasures mock-up into an Angular " +
          "environment. The prototype features interactive elements, allowing users to resize and move individual " +
          "content sections using handles on each panel, providing a flexible and dynamic user interface.",
        desc2: "Utilized Technologies for Mock-Up:  HTML5/CSS, Bootstrap 5, Vanilla Javascript, and " +
          "the Chart.js plug-in",
        desc3: "Utilized Technologies in Angular Prototype: Angular 16, Material UI, Bootstrap 5, TypeScript, ChartJS",
        link: "https://pryzemedia.com/clients/alion/cm4/CM/index.html",
        linkText: "View HTML Mock-Up",
        link2: "https://pryzemedia.com/clients/hii/html/angular-deploy/assessment-prototype/",
        link2Text: "View Angular Prototype"
      },
      {
        imgSrc: "assets/img/web/diss_mod_1.png",
        imgAlt: "Screenshot of DISS Training - Module 1 course",
        heading: "Welcome to DISS Training - Module 1",
        desc: "This module provides an in-depth introduction to the Defense Information System for Security (DISS), a " +
          "critical platform for managing personnel security, suitability, and credentialing management for the " +
          "Department of Defense. Users are guided through an intuitive, step-by-step learning process, with the " +
          "ability to navigate through the content using the Next button for a seamless learning experience. The " +
          "module incorporates user-friendly design and interactivity to facilitate a smooth introduction to the DISS system.",
        desc2: "Utilized Technologies: HTML5/CSS, Bootstrap 3.5, JavaScript, jQuery",
        link: "https://pryzemedia.com/clients/alion/diss_courses/DISS%20Module%201/",
        linkText: "View Demo",
        link2:""
      },
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
        linkText: "View Website",
        link2:""
      },
      {
        imgSrc: "assets/img/web/signazon.jpg",
        imgAlt: "Screenshot of the Signazon website",
        heading: "Signazon.com Redesign & HTML5 Tool Development",
        desc: "Collaborated with C# developers and the art director to ensure a seamless update to the Signazon " +
          "responsive website using the Bootstrap framework, aligning with design comps. Initiated the development " +
          "of a new HTML5 and JavaScript-based Designer tool to replace the existing Flash version. The new Designer " +
          "utilized SVG graphics within an HTML canvas, allowing users to import, edit, and save designs from the " +
          "original Flash application. These comprehensive updates transpired during the 2nd quarter of 2014.",
        desc2: "Utilized Technologies: C#, HTML5, CSS, JavaScript, Bootstrap, Adobe Flash, and XML data",
        link: "https://www.signazon.com/",
        linkText: "View Website",
        link2:""
      },
      {
        imgSrc: "assets/img/web/semperis-dashboaard.jpg",
        imgAlt: "Screenshot of the Semperis Enablement Dashboard",
        heading: "Semperis Enablement Dashboard",
        desc: "The Semperis Enablement Dashboard is a custom-built platform designed to track and analyze the training " +
          "progress of global sales teams. This dashboard provides insights into user training completion and correlates " +
          "course engagement with sales performance metrics, such as the number of deals closed. The project was built " +
          "using PHP and MySQL for backend functionality, while the front-end utilized the Bootstrap framework, HTML5, " +
          "jQuery, and AngularJS to create a responsive and intuitive user interface. This solution allows stakeholders " +
          "to monitor training effectiveness and make data-driven decisions to optimize sales strategies.",
        desc2: "Utilized Technologies: PHP 8, MySql, HTML5/CSS, Bootstrap 5.2.3, JavaScript, Angular JS, jQuery",
        link: "https://nodejs-test.projectcog.com/analytics#/program/analytics",
        linkText: "View Demo",
        link2:""
      },
      {
        imgSrc: "assets/img/web/mcafee_drag_drop.png",
        imgAlt: "Screenshot of the McAfee Drag and Drop Demo",
        heading: "McAfee Drag and Drop Activity Demo",
        desc: "This demo showcases the capability to design and integrate interactive Drag and Drop activities into " +
          "McAfee's eLearning courses. The template was specifically built to enhance the learning experience and " +
          "streamline the creation of engaging, hands-on activities for course developers.",
        desc2: "Utilized Technologies: HTML5/CSS, Bootstrap 3.5, JavaScript, jQuery",
        link: "https://www.demo.projectcog.com/ProjectCog/courses/DRAG-DROP-source/drag-drop-sample/",
        linkText: "View Demo",
        link2:""
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
        linkText: "View Demo",
        link2:""
      },
      {
        imgSrc: "assets/img/web/spinning-wheel.jpg",
        imgAlt: "Screenshot of the Spinning Wheel Game",
        heading: "Interactive Learning Activity: Spinning Wheel Game",
        desc: "Crafted as a dynamic learning component seamlessly integrated into McAfee SCORM courses. " +
          "Warning, this demo has music. Be prepared to turn down the volume on your device.",
        desc2: "Utilized Technologies: HTML5/CSS, Bootstrap 3.5, JavaScript, jQuery",
        link: "http://pryzemedia.com/clients/mcafee/gamification/spinning-wheel/",
        linkText: "View Demo",
        link2:""
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
        linkText: "View Demo",
        link2:""
      },
      /*{
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
      },*/
      {
        imgSrc: "assets/img/web/universityFurnishings.jpg",
        imgAlt: "Screenshot of the University Furnishings Website",
        heading: "University Furnishings Website Development",
        desc: "Developed the University Furnishings website using PHP, MySQL, " +
          "XHTML/CSS, and JavaScript while contracted by Dodd Creative. Responsible " +
          "for creating and managing the database, implementing back-end functionality " +
          "for seamless data retrieval, and designing the front-end visuals and " +
          "animations to enhance user experience. Leveraging PHP and MySql, all " +
          "product sections are " +
          "dynamically driven by a database. Project Initiation: 07-02-2010.",
        desc2: "Utilized Technologies: PHP, MySql, XHTML/CSS, JavaScript",
        link: "https://pryzemedia.com/universityfurnishings/index.php",
        linkText: "View Demo",
        link2:""
      }
    ]
  }
  ngOnInit() :void{
    this.InitWebData();
  }
}

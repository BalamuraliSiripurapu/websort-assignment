In this Assignment I have built **Websort Application** by applying the concepts I have learned till now.

### Header
  -It's a Common Component

  -It's a Responsive nav header. In Mobile devices we have included `Menu icon` which is imported from `react-icons` third party package. when you click on them a `popup tooltip` wil be opend. you can achieve that using `Popup` component from `reactjs-popup` third party package.
  For Desktop theres is no need of menu icon as we placed nav menu items on the top.

  -There is web logo on top left. When you click on the logo you will navigated to `Home` Route
   When You click on any nav item you will be navigated to respective Route and this can be achieved using `Link` component from `react-router-dom`.

  -I have applied `different background colors` to the header. so, when you `reload` the page each time you may get differnet background color.

  -For Responsiveness I have used `Media quries`.
  -third party packages used -`react-router-dom`, `react-icons`, `reactjs-popup`.

### Footer
    -It's a Common Component.
    
    -It's a responsive component, only background , aligment of elements will change in mobile compared to desktop.

    -Footer section contains application "social media accounts", "contact us" information.

### MobileNavbar
  -It is similar to `Header` component.

  -In place of `react-icons` i have used images wrapped in a button. so, when you click on them you will be navigated to respective route

### HomeRoute
  -I have included `MobileNavbar` in home route for small devices.

  -I have used `swiper` component `swiper` third party pacakage to implement `3D Carousel`.

### AboutUS
  -I have applied `different background images` to the header. so, when you `reload` the page each time you may get differnet background image.

  -I have implemented various sections in this route. All sections are resposnive ones.

  -If you click on Contact us button in `digital ideas` section you will be navigated to `Contact us` Route.

  -Our project section can be achieved using `swiper` component.

  -In the `Future innovation` section `react-icon tags` provided. when you click on each tag, respective innovation card will be displayed. it can be achieved by storing innovation details in state object. it can be done using `useState` method.

  -Achievements section is responsive one. In desktop all cards will bem displayed. But incase of mobile devices there will be only one card displayed. so to access rest we have provided `<` `>` buttons. it can be achieved by storing innovation details in state object. it can be done using `useState` method.

### Services
  -It's a responsive component. In desktop devices the order of image and text will be changed for alternative sections. For that i have used `conditional statement`.

  -I have identified `ServiceCard` item is common component across the page. so i have written separate component for it.
  
### Projects
  -I have used `swiper` component `swiper` third party pacakage to implement `3D Carousel`.

  -`Footer` Component included.

### Careers
  -In this Route i have implemented various sections. all responsive ones.

  -In this Route i have Identified `SubmitForm` component which common component in ContactUs Route and Careers Route. so, I have designed a separte component for it.

### ContactUs
  -In this Route i have implemented various sections. all responsive ones.

  -In this Route i have Identified `SubmitForm` component which common component in ContactUs Route and Careers Route. so, I have designed a separte component for it.



### App
  -I have imported all the modules in here.

  -I have imported `Browser Router` `Routes` (in some IDE `Switch`) `Route` components to navigate to differnet Routes.






### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Deployment



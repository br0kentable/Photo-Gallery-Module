*******

looking at the oPentable website in google chrome dev tools React menu

need to really look through this again or whenever I am lost in this process look back to this

what am i trying to accomlish right now?

its really too easy for me to go off the rails and explore unrelevant stuff 

if i can seed data with just photos concerned 

<a> photos-gallery-link

02/27/19 Belated journal entry for yesterday
Journal entry #0:

Great meeting with Magee!

Realized that when I'm struggling to move forward on project, when I'm stuck with a problem/bug
where there are multiple possibilities,
the first thing I need to do is STOP 
ask myself: 
  What do I know is working with what I have done?

ok then second thing is based on what is working: what isn't working?

  How can I eliminate one possible issue from the list of reasons? 
  How can I shrink the possible list of problems to come closer to the answer?

Leslie and Magee have both suggested that I make more commits
commit with each successful thing I've accomplished 

With Magee I was struggling to understand whether my mongoos syntax was working
because my requestHandler wasn't returning the JSON that I was expecting for a 
GET request at the api/restaurants/:id endpoint 
Magee liked that I was eliminating options by testing the mongoose syntax as a last resort
inside a console log
we eventually even had to try doing it inside the cli by checking in another terminal and 
running a regular query inside the mongod server 

Part of the problem i was having was that the param id was different than the id stored by 
the mongodb when creating the documents and saving the instance or model instance to the 
database, thus I had to use a different method from mongoose

  used the .find() method and the syntax was pretty simple instead of the where condition
  all you had to do was include an object inside the find parens that related to a col and field 

  find({ id: id })

was able to get correct JSOn object response from my request handler for a restaurants/:id  


02/28/19
Journal entry #1:
Todays struggles: I was groggy from night before, passing kidney stone

what did I accomplish today? 

I had to call a help desk ticket that Victor helped me out with

the problem was now that I had my request handler responding with right restaurants photos pulled from my db, why was I not finding seeing any of the static files that I had previously been serving
anymore, I wasn't seeing any console.logs or anything react, even the index.html file was not the same. I wasn't serving the static files. 
I hadn't even realized that all I had done with Magee was set up my Api route handler.

I needed to serve my static files from a different endpoint
I lost track of the fact that I still needed to handle the get request to the endpoint 
'restaurants/:id'


I am a little lost on this right now
so my index.html file needed to be changed to the script tag was changed from src="bundle.js"
to  src="http://localhost:3002/bundle.js">


Because, I wanted using componentWillMount

Since we need two child components photoGallery and PhotoSlider to communicate to each other 
what state is 
need to declare shared state in parent component App and then pass state back down to children components
by using props


  createPortal takes two arguments, because you appending it to a DOM node, 
   arg #1 - is going to be some jsx that we can render to the screen 
    arg #2 - is the element that you want the first arg/element to be rendered to which we are
    able to do through the document.querySelector selecting the eleemnt with the id of modal

then you just import and refer to the modal component in whatever scenario or component you desire to be the trigger for the modal to be rendered

In the case of this project, ? PhotoSlider ? on a click of the photoGallery 


React bootstrap
You can apply custom css to the modal dialog div using the "dialogClassName" prop. Example is using a custom css class with width set to 90%.


        //could conditionally render the PhotoGalleryScroller based on a click and make it toggleable active
      //if not render null


You use your 12-digit account ID to reference your account programmatically and in other contexts. You use your canonical user ID to configure Amazon S3 access control lists (ACLs).
AWS Account ID: 6372-0296-3838

Canonical User ID: 7df2c1014f72a565290e0b3b8a36b6e2b1f7030e0e669e93bdd938c5e0f94e73
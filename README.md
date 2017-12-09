# waiting-component

example app using a waiting component that waits 100ms before rendering the actual loading info.

_y u delay the rendering?_

<p><img src="https://images.onlinelabels.com/images/clip-art/GenX/yuno%20-%20meme.png" width="180px"></p>

* if the rendering is not delayed the user sees the loading info and shortly afterwards the actual content
* this flickering is annoying and does not provide a good user experience

_why do you use 100ms as delay?_

> “0.1 second is about the limit for having the user feel that the system is reacting instantaneously,
> meaning that no special feedback is necessary except to display the result.” Jakob Nielsen


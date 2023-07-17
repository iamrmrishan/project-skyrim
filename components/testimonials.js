import React from 'react';
import Container from './container';

const customStyle = {
  overflow: "scroll",
  // width: "1349px",
  height: "500px",
  border: "1px solid black"

}

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 overflow-auto">
            {/* <div className='overflow-auto'> */}
            <iframe style={customStyle}
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid0MP91mXmLuxAKDAXcqZMSyZ7dNzMYLmKbAYKSomp6fp7afeyk6tZjzWWieZCe7pg4l&show_text=true"
            />
            {/* </div> */}
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid0nkKZ9VMGL6mPKmhKsERS92ZVtukE441kEhvMKccyN5RFCbWFuZYoqpR8drCXcXNul&show_text=true"
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
            />
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpamoda.herath%2Fposts%2Fpfbid0275vCHGiMihbWx1s5rSCJnFLFJJJZnszKEHRTwtHtuN1zJTHeHcKX7Cvt1eAF5W75l&show_text=true&width=500"
              scrolling="no"
              frameBorder="0"
              allowFullScreen="true"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;

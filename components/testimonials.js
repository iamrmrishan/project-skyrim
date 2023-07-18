import React from 'react';
import Container from './container';

const Testimonials = () => {
  return (
    <Container>
      {/* <div>
        <iframe src="https://form.jotform.com/221416318044144" width="100%" height="100%" frameborder="0"></iframe>
      </div> */}
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 overflow-auto">
            <iframe style={{ height: "341px" }}
              className="w-full"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid0MP91mXmLuxAKDAXcqZMSyZ7dNzMYLmKbAYKSomp6fp7afeyk6tZjzWWieZCe7pg4l&show_text=true"
            />
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 overflow-auto">
            <iframe style={{ height: "167px" }}
              className="w-full"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid0nkKZ9VMGL6mPKmhKsERS92ZVtukE441kEhvMKccyN5RFCbWFuZYoqpR8drCXcXNul&show_text=true"
            />
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 overflow-auto">
            <iframe style={{ height: "184px" }}
              className="w-full"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpamoda.herath%2Fposts%2Fpfbid0275vCHGiMihbWx1s5rSCJnFLFJJJZnszKEHRTwtHtuN1zJTHeHcKX7Cvt1eAF5W75l&show_text=true"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;

import React from 'react';
import Container from './container';

const testimonialPosts = [{
  url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmadhavi.pathirage%2Fposts%2Fpfbid0MP91mXmLuxAKDAXcqZMSyZ7dNzMYLmKbAYKSomp6fp7afeyk6tZjzWWieZCe7pg4l&show_text=true",
  height: "351px"
}, {
  url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fsandushi.jayawardene%2Fposts%2Fpfbid0nkKZ9VMGL6mPKmhKsERS92ZVtukE441kEhvMKccyN5RFCbWFuZYoqpR8drCXcXNul&show_text=true",
  height: "198px"
}, {
  url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpamoda.herath%2Fposts%2Fpfbid0275vCHGiMihbWx1s5rSCJnFLFJJJZnszKEHRTwtHtuN1zJTHeHcKX7Cvt1eAF5W75l&show_text=true",
  height: "195px"
},
{
  url:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fkinkini.weeramanthri%2Fposts%2Fpfbid026Eo9WmdDHjxesbouNPUhjpsuLfy8unj6U67QrNdFQwmznwL2QqwUtduSZb9JdrUYl&show_text=true",
  height:"245px"
},
{
  url:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fthushi.dias%2Fposts%2Fpfbid025oEwwM1x3y929AtWHoG2tBZbtQiEMqBY425u1Du4Y22MyNH8UtdznFZXsBMvKLKCl&show_text=true",
  height:"250px"
}]

const Testimonials = () => {
  return (
    <Container>
      <div className="flex overflow-x-auto p-3">
        {testimonialPosts.map((post, index) => (
          <div key={post.url} className="relative min-w-[24rem] overflow-hidden mr-5">
            <div className="aspect-w-16 aspect-h-9 overflow-auto">
              <iframe style={{ height: post.height }}
                className="w-full"
                src={post.url}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;


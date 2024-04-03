import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy--policy--section">
        <div className="privacy--policy--top--section d-flex flex-column align-items-center justify-content-center pt-5">
          <img
            src="https://woodmart.b-cdn.net/games/wp-content/uploads/sites/14/2021/09/privacy-policy-xtemos-logo.svg"
            alt=""
          />
          <h2 className="my-3 fw-bold">WHO WE ARE</h2>
          <p className="text-center">
            Our website is :&nbsp;
            <Link to="https://woodmart.xtemos.com/" className="link">
              https://woodmart.xtemos.com/
            </Link>{" "}
          </p>
          <p className="text-center py-3">
            Thank you for visiting XTemos Studio. We are a company, creating
            products to enhance your website building experience. Please read
            this Privacy Policy, providing consent to document in order to have
            permission to use our services.
          </p>
        </div>
        <div className="privacy--policy--bottom--section mt-5 p-3">
          <h3 className="text-center">
            What Personal Data We Collect and Why We Collect It
          </h3>
          <span className="title--number">1.</span>{" "}
          <span className="ms-2 title">Comments</span>{" "}
          <p className="p-3">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            https://automattic.com/privacy/. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </p>
          <span className="title--number">2.</span>{" "}
          <span className="ms-2 title">Media</span>{" "}
          <p className="p-3">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>
          <span className="title--number">3.</span>{" "}
          <span className="ms-2 title">Contact Forms</span>{" "}
          <p className="p-3">
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year. If you have an account and you log in to this site, we will
            set a temporary cookie to determine if your browser accepts cookies.
            This cookie contains no personal data and is discarded when you
            close your browser. When you log in, we will also set up several
            cookies to save your login information and your screen display
            choices. Login cookies last for two days, and screen options cookies
            last for a year. If you select “Remember Me”, your login will
            persist for two weeks. If you log out of your account, the login
            cookies will be removed. If you edit or publish an article, an
            additional cookie will be saved in your browser. This cookie
            includes no personal data and simply indicates the post ID of the
            article you just edited. It expires after 1 day.
          </p>
          <span className="title--number">4.</span>{" "}
          <span className="ms-2 title">
            Embedded Content from Other Websites
          </span>{" "}
          <p className="p-3">
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website. These websites may collect data about you, use
            cookies, embed additional third-party tracking, and monitor your
            interaction with that embedded content, including tracing your
            interaction with the embedded content if you have an account and are
            logged in to that website.
          </p>
          <span className="title--number">5.</span>{" "}
          <span className="ms-2 title">How Long We Retain Your Data</span>{" "}
          <p className="p-3">
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue. For users that register on our website (if any), we also
            store the personal information they provide in their user profile.
            All users can see, edit, or delete their personal information at any
            time (except they cannot change their username). Website
            administrators can also see and edit that information.
          </p>
          <span className="title--number">6.</span>{" "}
          <span className="ms-2 title">
            What Rights You Have Over Your Data
          </span>{" "}
          <p className="p-3">
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </p>
          <span className="title--number">7.</span>{" "}
          <span className="ms-2 title">Where We Send Your Data</span>{" "}
          <p className="p-3">
            Visitor comments may be checked through an automated spam detection
            service.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

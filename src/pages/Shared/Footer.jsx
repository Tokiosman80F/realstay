import {
  FaHouseChimneyCrack,
  FaFacebookF,
  FaInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex flex-col bg-gray-800 text-gray-200 p-10'>
      {/* first */}
      <div className='flex flex-row justify-around items-center'>
        <div className=' basis-1/4'>
          <h2 className='text-4xl '>
            <FaHouseChimneyCrack size='40' className='inline' /> Real Stay
          </h2>
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat
            exercitationem animi et, dolores at tenetur qui ullam maiores quas,
            possimus commodi nisi amet ipsa saepe harum nulla nemo accusamus.
          </p>

          <ul className='flex gap-3'>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaSquareYoutube />
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 justify-center items-start'>
          <h2>Company</h2>
          <ul className='flex flex-col'>
            <li>Home</li>
            <li>About</li>
            <li>Retails</li>
            <li>Testimoial</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 justify-center items-start'>
          <h2>Contact</h2>
          <ul className='flex flex-col'>
            <li>+0123456789</li>
            <li>www.realstay.com</li>
            <li>noreplay@realstay.com</li>
            <li>45th street,Mirpur,Dhaka</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5 justify-center items-start'>
          <h2>Support</h2>
          <ul className='flex flex-col'>
            <li>My Account</li>
            <li>Payment</li>
            <li>Offers</li>
          </ul>
        </div>
      </div>
      <br />
      {/* second */}
      <div className='text-center'>
        Copyright &copy; 2023 Real Stay.All Right Reserved
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import "./SingleProduct.css";
import Meta from "../../Components/MetaComponent/Meta";
import ReactImageZoom from "react-image-zoom";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import ReactStars from "react-rating-stars-component";
import Colors from "../../Components/Colors/Colors";
import {
  TbBrandGoogleAnalytics,
  TbGitCompare,
  TbDimensions,
} from "react-icons/tb";
import { GiPawHeart, GiExplosiveMaterials } from "react-icons/gi";
import { BsCaretDown } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiDonateHeart } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import Hoc from "../../Components/Hoc/Hoc";
function SingleProduct() {
  const props = {
    width: 1600,
    zoomWidth: 500,
    height: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const handleCopy = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrums title="Product-Name" />
      <Hoc class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-10">
              <div>
                <img src="/images/watch.jpg" className="img-fluid" alt="" />
              </div>
              <div>
                <img src="/images/watch.jpg" className="img-fluid" alt="" />
              </div>
              <div>
                <img src="/images/watch.jpg" className="img-fluid" alt="" />
              </div>
              <div>
                <img src="/images/watch.jpg" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3>Kids Headphone 10 pack multi colored for students</h3>
              </div>
              <div className="border-bottom py-2">
                <p className="price mb-2">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <div>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mb-0 py-2 reviews-user">(2 Reviews)</p>
                </div>
                <a href="#review" className="review-btn">
                  WriteReview
                </a>
              </div>
              <div className="border-bottom ">
                <div className="d-flex gap-10 my-2 align-items-center">
                  <h3 className="product-headings">Type :</h3>
                  <p className="product-datas mb-0">Watch</p>
                </div>
                <div className="d-flex gap-10 my-2 align-items-center ">
                  <h3 className="product-headings">Brand :</h3>
                  <p className="product-datas mb-0">Havels</p>
                </div>
                <div className="d-flex gap-10 my-2 align-items-center">
                  <h3 className="product-headings">Category</h3>
                  <p className="product-datas mb-0">Watch</p>
                </div>
                <div className="d-flex gap-10 my-2 align-items-center">
                  <h3 className="product-headings">Tags :</h3>
                  <p className="product-datas mb-0">Watch</p>
                </div>
                <div className="d-flex gap-10 my-2 align-items-center">
                  <h3 className="product-headings">Availablity :</h3>
                  <p className="product-datas mb-0">In Stcok</p>
                </div>
                <div className="d-flex gap-10 my-2 flex-column mt-2 mb-3">
                  <h3 className="product-headings">Size :</h3>
                  <div className="d-flex flex-wrap gap-10">
                    <span className="badge bg-white border border-1 text-dark border-secondary">
                      S
                    </span>
                    <span className="badge bg-white border border-1 text-dark border-secondary">
                      M
                    </span>
                    <span className="badge bg-white border border-1 text-dark border-secondary">
                      X
                    </span>
                    <span className="badge bg-white border border-1 text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 my-2 flex-column mt-2 mb-3">
                  <h3 className="product-headings">Color :</h3>
                  <Colors />
                </div>
                <div className="d-flex gap-10 my-2 flex-column mt-2 mb-2">
                  <h3 className="product-headings">Quantity :</h3>
                  <div className="d-flex flex-row mt-2 mb-2 gap-30 align-items-center">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className="form-control border-1 border border-secondary"
                    />
                    <div className=" d-flex align-items-center gap-30">
                      <button className="button login border-0">Buy Now</button>
                      <button className="button signup border-0">
                        Add to Card
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div className="mb-4 mt-3  addtocompare">
                    <a>
                      <TbGitCompare className="fs-4" />
                      Add to Compare
                    </a>
                  </div>
                  <div className="mb-4 mt-3 addtocompare">
                    <a>
                      <GiPawHeart className="fs-4" /> Add to wishlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="accrodion mt-3 border-bottom" d="accordionEx">
                <div className="accordion-item ">
                  <h2
                    className="accordion-header d-flex "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    id="headingOne"
                  >
                    <button
                      className="accordion-button accord-btn gap-10"
                      type="button"
                    >
                      <CiDeliveryTruck className="fs-4" /> Shopping & Returns
                    </button>
                    <BsCaretDown />
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionEx"
                  >
                    <p className="product-datas mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion mt-3 border-bottom" d="accordionEx">
                <div className="accordion-item ">
                  <h2
                    className="accordion-header d-flex "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                    id="headingTwo"
                  >
                    <button
                      className="accordion-button accord-btn gap-10"
                      type="button"
                    >
                      <GiExplosiveMaterials className="fs-4" /> Material
                    </button>
                    <BsCaretDown />
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionEx"
                  >
                    <p className="product-datas mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion mt-3 border-bottom" d="accordionEx">
                <div className="accordion-item ">
                  <h2
                    className="accordion-header d-flex "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                    id="headingThree"
                  >
                    <button
                      className="accordion-button accord-btn gap-10"
                      type="button"
                    >
                      <TbDimensions className="fs-4" /> Dimensions
                    </button>
                    <BsCaretDown />
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionEx"
                  >
                    <p className="product-datas mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion mt-3 border-bottom" d="accordionEx">
                <div className="accordion-item ">
                  <h2
                    className="accordion-header d-flex "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                    id="headingFour"
                  >
                    <button
                      className="accordion-button accord-btn gap-10"
                      type="button"
                    >
                      <BiDonateHeart className="fs-4" /> Care Instructions
                    </button>
                    <BsCaretDown />
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionEx"
                  >
                    <p className="product-datas mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion mt-3 border-bottom" d="accordionEx">
                <div className="accordion-item ">
                  <h2
                    className="accordion-header d-flex "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                    id="headingFive"
                  >
                    <button
                      className="accordion-button accord-btn gap-10"
                      type="button"
                    >
                      <MdPayment className="fs-4" /> payment Partners
                    </button>
                    <BsCaretDown />
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionEx"
                  >
                    <div className="d-flex align-items-center justify-content-center gap-10 w-100">
                      <img
                        className="w-100 img-fluid payment-image"
                        src="/images/paymentpartners.png"
                        alt="payment partners"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-10 my-1 py-2 align-items-center border-bottom mt-3">
                <h3 className="product-headings">Product Link:</h3>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    handleCopy("https://course.masaischool.com/");
                  }}
                >
                  Copy Product Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
      <Hoc class1="description-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type when an unknown printer took a
                galley of type and scrambled it to make a type
              </p>
            </div>
          </div>
        </div>
      </Hoc>
      <Hoc class1="review-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 id="review" className="review-title">
              Reviews
            </h4>
            <div className="review-inner-wrapper">
              <div className="review-head py-5 d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-3">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on two Review</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form className="d-flex flex-column gap-20">
                  <div>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      type="text"
                      className="w-100 form-control"
                      cols="30"
                      rows="10"
                      placeholder="comments"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0 mb-2">Submit</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <div className="d-flex align-items-center gap-10">
                    <h6 className="mb-0">Udhaya</h6>
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">Yup Its Very Good Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hoc>
    </>
  );
}

export default SingleProduct;

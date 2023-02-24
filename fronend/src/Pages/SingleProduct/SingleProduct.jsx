import React, { useState } from "react";
import "./SingleProduct.css";
import Meta from "../../Components/MetaComponent/Meta";
import ReactImageZoom from "react-image-zoom";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import ReactStars from "react-rating-stars-component";
import Colors from "../../Components/Colors/Colors";
import { TbGitCompare } from "react-icons/tb";
import { GiPawHeart } from "react-icons/gi";
function SingleProduct() {
  const props = {
    width: 1600,
    zoomWidth: 500,
    height: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrums title="Product-Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
                        <button className="button login border-0">
                          Buy Now
                        </button>
                        <button className="button signup border-0">
                          Add to Card
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30">
                    <div className="mb-4 mt-3">
                      <a href>
                        <TbGitCompare className="fs-4" />
                        Add to Compare
                      </a>
                    </div>
                    <div className="mb-4 mt-3">
                      <a href>
                        <GiPawHeart className="fs-4" /> Add to wishlist
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-wrapper py-3 home-wrapper-2">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12">
                    <h4>Description</h4>
                    <div className="bg-white p-3">
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type when an
                        unknown printer took a galley of type and scrambled it
                        to make a type
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-wrapper py-3 home-wrapper-2">
              <div className="container-xxl">
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
                            <a
                              className="text-dark text-decoration-underline"
                              href=""
                            >
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
                            <button className="button border-0 mb-2">
                              Submit
                            </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;

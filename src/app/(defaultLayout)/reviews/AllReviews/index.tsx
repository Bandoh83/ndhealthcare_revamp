/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useAxios from "@/app/utils/useAxios";
import { useEffect, useState } from "react";
import swal from "sweetalert2";
import Rating from "@/app/ui/Rating"; // Make sure this path is correct
import Image from "next/image";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";

const AllReviews = () => {
  const api = useAxios();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalReviews: 0,
    limit: 4, // Items per page
  });

  const hardCoded = [
    {
      id: "1",
      name: "Dorcas Ntiamoah",
      location: "Koforidua",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "I’ve had an amazing experience with ND Healthcare. The staff are not only professional but also incredibly warm and attentive. From the front desk to the clinical team, everyone made me feel heard and cared for. It's clear that patient well-being is their top priority. Highly recommend!",
      rating: 5,
    },
    {
      id: "2",
      name: "Chirag Patel",
      location: "Accra",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "Finding a trustworthy nanny can be difficult, but ND Healthcare made the process smooth and reassuring. The nanny assigned to our family was punctual, loving, and highly trained in child care and safety.",
      rating: 4.5,
    },
    {
      id: "3",
      name: "Afi Quarshie",
      location: "Kumasi",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "The staff are knowledgeable, empathetic, and always willing to go the extra mile. If you’re looking for a healthcare partner that treats you like family, this is it.",
      rating: 4.5,
    },
    {
      id: "4",
      name: "Lina AbiRafeh",
      location: "Accra",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "The nanny connected with our child immediately and maintained a balance of fun and discipline. It gave us peace of mind knowing our child was in good hands while we worked. I highly recommend NDH’s nanny services to any parent looking for reliable and professional care at home..",
      rating: 4.5,
    },
  ];

    const fetchAllReviews = async (page = 1) => {
      setIsLoading(true);
      try {
        const response = await api.get(
          `api/reviews?page=${page}&limit=${pagination.limit}`
        );
        const apiReviews = response.data.data.map((review) => ({
          id: review._id,
          name: review.name,
          location: review.location,
          imgSrc: review.image,
          testimonial: review.comment,
          rating: review.rating,
        }));
        setReviews([...apiReviews, ...hardCoded]);
        setPagination({
          currentPage: response.data.currentPage || 1,
          totalPages: response.data.totalPages || 1,
          totalReviews: response.data.totalReviews || hardCoded.length,
          limit: response.data.limit || 4,
        });
      } catch (error) {
        console.error(error);
        setReviews(hardCoded);
        setPagination({
          currentPage: 1,
          totalPages: 1,
          totalReviews: hardCoded.length,
          limit: 4,
        });
        swal.fire({
          title: "Error",
          text: "Error Fetching Reviews",
          icon: "error",
          toast: true,
          timer: 3000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } finally {
        setIsLoading(false);
      }
    };

  useEffect(() => {
  
    fetchAllReviews(1);
  }, []);

  const loadMore = async () => {
    if (pagination.currentPage < pagination.totalPages) {
      const nextPage = pagination.currentPage + 1;
      await fetchAllReviews(nextPage);
    }
  };

  const showLess = async () => {
   await fetchAllReviews(1); // Reset to first page
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2 className="cs_section_title cs_fs_72 m-0 cs_center cs_orange_color">
          What Our Clients Say
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Hear from people who have experienced our services
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                padding: "25px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <Image
                  src={review.imgSrc}
                  alt={review.name}
                  width={150}
                  height={100}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <h3
                    style={{
                      margin: "0",
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#333",
                    }}
                  >
                    {review.name}
                  </h3>
                  <p
                    style={{
                      margin: "5px 0 0",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {review.location}
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: "15px" }}>
                <Rating ratingNumber={review.rating} />
              </div>

              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-10px",
                    fontSize: "30px",
                    color: "#eee",
                    zIndex: "0",
                  }}
                >
                  “
                </span>
                <p
                  style={{
                    position: "relative",
                    zIndex: "1",
                    color: "#555",
                    lineHeight: "1.6",
                    fontStyle: "italic",
                    marginLeft: "15px",
                  }}
                >
                  {review.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>

              {/* Pagination controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {pagination.currentPage > 1 && (
            <button
              onClick={async () => await fetchAllReviews(pagination.currentPage - 1)}
              className="cs_btn cs_style_1"
              disabled={isLoading}
            >
                <span>  Previous</span>
            
            </button>
          )}

          {pagination.currentPage < pagination.totalPages && (
            <button
              onClick={loadMore}
              className="cs_btn cs_style_1"
              disabled={isLoading}
            >
                <span>Next</span>
              <span><FaChevronRight className="ml-2" /></span>
              
            </button>
          )}

          {pagination.currentPage > 1 && (
            <button
              onClick={showLess}
              className="cs_btn cs_outline_1"
              disabled={isLoading}
            >
              <span>Show First Page</span>
             <span> <FaChevronDown className="ml-2" /></span>
            </button>
          )}
        </div>

    <div style={{ textAlign: "center", marginTop: "15px", color: "#666" }}>
          Page {pagination.currentPage} of {pagination.totalPages} • {pagination.totalReviews} total reviews
        </div>
      </div>
    </div>
  );
};

export default AllReviews;

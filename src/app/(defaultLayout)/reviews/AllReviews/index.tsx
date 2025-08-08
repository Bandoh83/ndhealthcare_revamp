/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "@/app/utils/useAxios";
import { useEffect, useState } from "react";
import swal from "sweetalert2";
import Rating from "@/app/ui/Rating";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const AllReviews = () => {
  const api = useAxios();
  const queryClient = useQueryClient();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalReviews: 0,
    limit: 4,
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


  const fetchReviews = async (page) => {
    try {
      const response = await api.get(
        `api/reviews?page=${page}&limit=${pagination.limit}`
      );
      
      const apiReviews = response.data.data?.map((review) => {
        let imageUrl = null;
        if (review.image && review.image.image) {
          try {
            const bufferData = review.image.image.data.data;
            const base64String = Buffer.from(bufferData).toString("base64");
            imageUrl = `data:${review.image.image.contentType};base64,${base64String}`;
          } catch (error) {
            console.error("Error processing image:", error);
          }
        }

        return {
          id: review._id,
          name: review.name,
          location: review.location,
          imgSrc: imageUrl || "/images/home_1/avatar_3.jpg",
          testimonial: review.comment,
          rating: review.rating,
        };
      });

      setPagination({
        currentPage: response.data.currentPage || 1,
        totalPages: response.data.totalPages || 1,
        totalReviews: response.data.totalReviews || hardCoded.length,
        limit: response.data.limit || 4,
      });

      return [...apiReviews, ...hardCoded];
    } catch (error) {
      console.error(error);
      setPagination({
        currentPage: 1,
        totalPages: 1,
        totalReviews: hardCoded.length,
        limit: 4,
      });
      return hardCoded;
    }
  };

  const { data: reviews = hardCoded, isLoading, isError } = useQuery({
    queryKey: ['reviews', pagination.currentPage],
    queryFn: () => fetchReviews(pagination.currentPage),
    staleTime: 0,
  
  }
  
);

  useEffect(() => {
    if (pagination.currentPage < pagination.totalPages) {
      queryClient.prefetchQuery({
        queryKey: ['reviews', pagination.currentPage + 1],
        queryFn: () => fetchReviews(pagination.currentPage + 1),
      });
    }
  }, [pagination.currentPage, pagination.totalPages]);

  const loadMore = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setPagination(prev => ({
        ...prev,
        currentPage: prev.currentPage + 1
      }));
    }
  };

  const showLess = () => {
    setPagination(prev => ({
      ...prev,
      currentPage: 1
    }));
  };

  if (isLoading) {
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
            {[...Array(pagination.limit)]?.map((_, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  padding: "25px",
                  height: "300px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#eee",
                      marginRight: "15px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        width: "60%",
                        height: "16px",
                        backgroundColor: "#eee",
                        borderRadius: "4px",
                        marginBottom: "8px",
                      }}
                    />
                    <div
                      style={{
                        width: "40%",
                        height: "14px",
                        backgroundColor: "#eee",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "20px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                    }}
                  />
                </div>

                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "100%",
                      height: "12px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      height: "12px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  />
                  <div
                    style={{
                      width: "80%",
                      height: "12px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  />
                  <div
                    style={{
                      width: "90%",
                      height: "12px",
                      backgroundColor: "#eee",
                      borderRadius: "4px",
                    }}
                  />
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                    animation: "shimmer 1.5s infinite",
                  }}
                />
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  if (isError) {
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
            {(Array.isArray(reviews) ? reviews : [])?.map((review) => (
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

        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {pagination.currentPage > 1 && (
            <button
              onClick={() => setPagination(prev => ({
                ...prev,
                currentPage: prev.currentPage - 1
              }))}
              className="cs_btn cs_style_1"
              disabled={isLoading}
            >
              <span> Previous</span>
            </button>
          )}

          {pagination.currentPage < pagination.totalPages && (
            <button
              onClick={loadMore}
              className="cs_btn cs_style_1"
              disabled={isLoading}
            >
              <span>Next</span>
              <span>
                <FaChevronRight className="ml-2" />
              </span>
            </button>
          )}

          {pagination.currentPage > 1 && (
            <button
              onClick={showLess}
              className="cs_btn cs_outline_1"
              disabled={isLoading}
            >
              <span>Show First Page</span>
              <span>
                {" "}
                <FaChevronDown className="ml-2" />
              </span>
            </button>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "15px", color: "#666" }}>
          Page {pagination.currentPage} of {pagination.totalPages} 
          {/* {pagination.totalReviews} total reviews */}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
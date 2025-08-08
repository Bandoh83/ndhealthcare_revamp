"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";
import Testimonial from "../../Testimonial";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import ReviewModal from "@/app/ui/ReviewModal";
import useAxios from "@/app/utils/useAxios";
import swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function TestimonialSection({ sectionTitle, sectionTitleDown }) {
  const api = useAxios();
  const queryClient = useQueryClient();

  const hardCoded = [
    {
      id: "1",
      name: "Dorcas Ntiamoah",
      location: "Koforidua",
      imgSrc: "/images/home_1/avatar_3.jpg",
      testimonial:
        "I've had an amazing experience with ND Healthcare. The staff are not only professional but also incredibly warm and attentive. From the front desk to the clinical team, everyone made me feel heard and cared for. It's clear that patient well-being is their top priority. Highly recommend!",
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

  const [reviews, setReviews] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalReviews: 0,
  });

  // useEffect(() => {
  //   const fetchAllReviews = async (page = 1) => {
  //     setIsloading(true);
  //     try {
  //       const response = await api.get(`api/reviews?page=${page}`);

  //       const apiReviews = response.data.data.map((review) => {
  //         // Create image URL if image exists
  //         let imageUrl = null;
  //         if (review.image && review.image.image) {
  //           try {
  //             const bufferData = review.image.image.data.data;
  //             const base64String = Buffer.from(bufferData).toString("base64");
  //             imageUrl = `data:${review.image.image.contentType};base64,${base64String}`;
  //           } catch (error) {
  //             console.error("Error processing image:", error);
  //           }
  //         }

  //         return {
  //           id: review._id,
  //           name: review.name,
  //           location: review.location,
  //           imgSrc: imageUrl || "/images/home_1/avatar_3.jpg",
  //           testimonial: review.comment,
  //           rating: review.rating,

  //         };
  //       });

  //       setReviews([...apiReviews, ...hardCoded]);
  //       setPagination({
  //         currentPage: response.data.currentPage || 1,
  //         totalPages: response.data.totalPages || 1,
  //         totalReviews: response.data.totalReviews || hardCoded.length,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       setReviews(hardCoded);
  //       setPagination({
  //         currentPage: 1,
  //         totalPages: 1,
  //         totalReviews: hardCoded.length,
  //       });
  //     } finally {
  //       setIsloading(false);
  //     }
  //   };

  //   fetchAllReviews(1);
  // }, []);

  const { isLoading } = useQuery({
    queryKey: ["reviews", pagination.currentPage],
    queryFn: async () => {
      const response = await api.get(
        `api/reviews?page=${pagination.currentPage}`
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

      // Maintain your exact state update logic
      setReviews([...apiReviews, ...hardCoded]);
      setPagination({
        currentPage: response.data.currentPage || 1,
        totalPages: response.data.totalPages || 1,
        totalReviews: response.data.totalReviews || hardCoded.length,
      });

      return response.data;
    },

    onError: () => {
      // Maintain your exact error handling
      setReviews(hardCoded);
      setPagination({
        currentPage: 1,
        totalPages: 1,
        totalReviews: hardCoded.length,
      });
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: addReview } = useMutation({
    mutationFn: async (newReview) => {
      const formData = new FormData();
      formData.append("name", newReview.name);
      formData.append("location", newReview.location);
      formData.append("rating", newReview.rating);
      formData.append("comment", newReview.testimonial);

      if (newReview.avatarFile) {
        formData.append("image", newReview.avatarFile);
      }

      const response = await api.post("api/reviews/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onMutate: async (newReview) => {
      // Preserve your optimistic update logic exactly
      const previousReviews = [...reviews];
      const tempId = uuidv4();
      setReviews([{ ...newReview, id: tempId }, ...reviews]);
      return { previousReviews, tempId };
    },
    onError: (error, variables, context) => {
      // Preserve your exact rollback logic
      setReviews(context.previousReviews);
      swal.fire({
        title: "Error",
        text: "Failed to submit review. Please try again.",
        icon: "error",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    },
    onSuccess: (data, variables, context) => {
      // Preserve your exact success logic
      setReviews((prev) => [
        { ...variables, id: data._id },
        ...prev.filter((review) => review.id !== context.tempId),
      ]);
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
        exact: false, // Invalidate all review queries
      });

      swal.fire({
        title: "Review Added Successfully",
        icon: "success",
        toast: true,
        timer: 3000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    },
  });

  const handleAddReview = async (newReview) => {
    addReview(newReview);
  };
  if (isLoading) {
    return (
      <div className="container">
        <SectionHeading
          title={sectionTitle}
          titleDown={sectionTitleDown}
          center
        />
        <div>Loading Reviews</div>
      </div>
    );
  }

  return (
    <div className="container">
      <SectionHeading
        title={sectionTitle}
        titleDown={sectionTitleDown}
        center
      />
      <Spacing md="72" lg="50" />
      <Testimonial reviews={reviews.slice(0, 4)} />
      <Spacing md="72" lg="50" />

      <Link href="/reviews">
        <button
          style={{ textAlign: "left", float: "left", marginBottom: "15px" }}
          className="cs_btn cs_outline_1 cs_radius_5"
        >
          <span>View More</span>
          <span className="ml-2 flex items-center justify-center">
            <FaArrowRight />
          </span>
        </button>
      </Link>

      <button
        style={{ textAlign: "right", float: "right" }}
        className="cs_btn cs_style_1"
        onClick={() => setIsModalOpen(true)}
      >
        <span>Add Review</span>
        <span className="ml-2 flex items-center justify-center">
          <FaPlus />
        </span>
      </button>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
      />
    </div>
  );
}

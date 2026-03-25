// PostComponent.jsx
import React from "react";

export function PostComponent({
  name,
  subtitle,
  time,
  image,
  description
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "400px",
        padding: "15px",
        borderRadius: "10px",
        border: "1px solid #e0e0e0",
        marginBottom: "15px",
      }}
    >
      {/* Header Row */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <img
          src={image}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />
        <div style={{ marginLeft: "10px" }}>
          <div style={{ fontWeight: 600, fontSize: "15px" }}>{name}</div>
          <div style={{ fontSize: "13px", color: "#666" }}>{subtitle}</div>
          <div style={{ fontSize: "12px", color: "#aaa" }}>{time}</div>
        </div>
      </div>

      {/* Description */}
      <div style={{ fontSize: "14px", lineHeight: "18px" }}>
        {description}
      </div>
    </div>
  );
}

{/*
  App loads

posts = []

UI renders no posts

User clicks button

Addpost() creates new post

setposts() updates state

React re-runs App()

posts.map() creates <PostComponent />

UI displays post

*/}
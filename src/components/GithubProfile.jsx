import React, { useEffect, useRef, useState } from "react";

const BASE_URL = "https://api.github.com/users";

const GithubProfile = () => {
  const searchProfileRef = useRef();
  const [username, setUsername] = useState("munirmahmud");
  const [gitProfile, setGitProfile] = useState(null);

  useEffect(() => {
    getProfileInfo(username);
  }, []);

  const getProfileInfo = async () => {
    const response = await fetch(`${BASE_URL}/${username}`);
    const data = await response.json();

    if (data) {
      setGitProfile(data);
    }
  };

  const handleClearInput = () => {
    searchProfileRef.current.value = "";
    searchProfileRef.current.focus();
  };

  return gitProfile ? (
    <>
      <input
        type="text"
        placeholder="Type your github username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ref={searchProfileRef}
      />
      <button type="button" onClick={getProfileInfo}>
        Search
      </button>
      <button type="button" onClick={handleClearInput}>
        Clear
      </button>

      <h3>{gitProfile.name}'s Github profile</h3>

      <img src={gitProfile.avatar_url} alt={gitProfile.name} width="130" />

      <h4>Name: {gitProfile.name}</h4>
      <p>{gitProfile.bio}</p>
    </>
  ) : (
    <h3>Loading...</h3>
  );
};

export default GithubProfile;

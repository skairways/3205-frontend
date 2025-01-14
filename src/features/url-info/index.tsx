import React, { useState } from "react";
import { TextInput, Button, Group, Text, Loader } from "@mantine/core";
import { useQuery } from "react-query";
import { UrlInfoResponse } from "./types";
import { fetchUrlInfo } from "./api";

const UrlInfo: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } =
    useQuery<UrlInfoResponse | null>(
      ["urlInfo", shortUrl],
      () => fetchUrlInfo(shortUrl),
      { enabled: false }
    );

  const handleSubmit = () => {
    if (shortUrl) {
      refetch();
    } else {
      setError("Short URL is required");
    }
  };

  return (
    <div>
      <TextInput
        label="Enter Shortened URL"
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
        placeholder="abcdef"
        error={error}
      />
      <Group mt="md">
        <Button onClick={handleSubmit} disabled={isLoading}>
          Get Info
        </Button>
      </Group>
      {isLoading && <Loader />}
      {isError && <Text color="red">{error}</Text>}
      {data && (
        <div>
          <Text mt="md">Original URL: {data.originalUrl}</Text>
          <Text>Created At: {new Date(data.createdAt).toLocaleString()}</Text>
          <Text>Click Count: {data.clickCount}</Text>
        </div>
      )}
    </div>
  );
};

export default UrlInfo;

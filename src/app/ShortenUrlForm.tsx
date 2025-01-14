import React, { useState } from "react";
import { TextInput, Button, Group, Text } from "@mantine/core";
import { useMutation } from "react-query";
import clientApi, { baseURL } from "../shared/api/base-api";

// Define the type for the response
type ShortenedUrlResponse = {
  shortUrl: string;
  originalUrl: string;
};

const shortenUrl = async (
  originalUrl: string
): Promise<ShortenedUrlResponse> => {
  const response = await clientApi.post("shorten", {
    originalUrl,
  });
  return response.data;
};

const ShortenUrlForm: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const { mutate, isLoading, isError, data } = useMutation(shortenUrl, {
    onError: () => {
      setError("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = () => {
    if (originalUrl) {
      mutate(originalUrl);
    } else {
      setError("URL is required");
    }
  };

  return (
    <div>
      <TextInput
        label="Enter Original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="https://example.com"
        error={error}
      />
      <Group mt="md">
        <Button onClick={handleSubmit} loading={isLoading}>
          Shorten
        </Button>
      </Group>
      {isError && <Text color="red">{error}</Text>}
      {data && (
        <Text mt="md" color="green">
          Shortened URL:{" "}
          <a
            href={`${baseURL}${data.shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${baseURL}${data.shortUrl}`}
          </a>
        </Text>
      )}
    </div>
  );
};

export default ShortenUrlForm;

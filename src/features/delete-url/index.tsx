import React, { useState } from "react";
import { TextInput, Button, Group, Text } from "@mantine/core";
import { useMutation } from "react-query";
import { deleteUrl } from "./api";

const DeleteUrl: React.FC = () => {
  const [shortUrl, setShortUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { mutate, isLoading, isSuccess } = useMutation(deleteUrl, {
    onError: () => {
      setError("Something went wrong. Please try again.");
    },
  });

  const handleSubmit = () => {
    if (shortUrl) {
      mutate(shortUrl);
    } else {
      setError("Short URL is required");
    }
  };

  return (
    <div>
      <TextInput
        label="Enter Shortened URL to Delete"
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
        placeholder="abcdef"
        error={error}
      />
      <Group mt="md">
        <Button onClick={handleSubmit} loading={isLoading}>
          Delete
        </Button>
      </Group>
      {isSuccess && (
        <Text color="green">Shortened URL deleted successfully</Text>
      )}
      {error && <Text color="red">{error}</Text>}
    </div>
  );
};

export default DeleteUrl;

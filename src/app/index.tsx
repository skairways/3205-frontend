import { Container, Title, Space, MantineProvider } from "@mantine/core";
import ShortenUrlForm from "../features/shorten-url";
import UrlInfo from "../features/url-info";
import DeleteUrl from "../features/delete-url";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={{ fontFamily: "Inter, sans-serif" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container p="xs" size="xs">
          <Title order={1} mt="xl">
            URL Shortener
          </Title>
          <Space h="lg" />

          <ShortenUrlForm />
          <Space h="xl" />

          <UrlInfo />
          <Space h="xl" />

          <DeleteUrl />
        </Container>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Container, Title, Space, MantineProvider } from "@mantine/core";
import ShortenUrlForm from "./ShortenUrlForm";
import UrlInfo from "./UrlInfo";
import DeleteUrl from "./DeleteUrl";
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

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
  Chip,
} from '@mui/material';
import { Download, AutoAwesome } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { authService } from '../services/authService';

interface GeneratedReport {
  filename: string;
  download_url: string;
  message: string;
}

const Dashboard: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [generatedReport, setGeneratedReport] = useState<GeneratedReport | null>(null);
  const { state } = useAuth();

  const handleGenerateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    setGeneratedReport(null);

    try {
      const result = await authService.generateReport(topic);
      setGeneratedReport(result);
      setSuccess('Report generated successfully!');
      setTopic('');
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to generate report');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!generatedReport) return;

    try {
      const blob = await authService.downloadReport(generatedReport.filename);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = generatedReport.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError('Failed to download report');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome back, {state.user?.username}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Generate comprehensive reports on any topic using AI
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            <AutoAwesome sx={{ mr: 1, verticalAlign: 'middle' }} />
            Generate New Report
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleGenerateReport} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Report Topic"
              placeholder="e.g., Artificial Intelligence in Healthcare, Climate Change Impact, Digital Marketing Trends"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={loading}
              multiline
              rows={3}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading || !topic.trim()}
              startIcon={loading ? <CircularProgress size={20} /> : <AutoAwesome />}
              sx={{ mb: 2 }}
            >
              {loading ? 'Generating Report...' : 'Generate Report'}
            </Button>
          </Box>

          {generatedReport && (
            <Box sx={{ mt: 4, p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                Report Ready!
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Chip 
                  label={generatedReport.filename} 
                  variant="outlined" 
                  sx={{ fontFamily: 'monospace' }}
                />
              </Box>
              <Button
                variant="contained"
                color="success"
                startIcon={<Download />}
                onClick={handleDownload}
                size="large"
              >
                Download PDF Report
              </Button>
            </Box>
          )}

          {loading && (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <CircularProgress size={40} />
              <Typography variant="body2" sx={{ mt: 2 }}>
                AI is analyzing your topic and generating a comprehensive report...
                <br />
                This usually takes 30-60 seconds.
              </Typography>
            </Box>
          )}
        </Paper>

        <Paper elevation={1} sx={{ p: 3, mt: 4, bgcolor: 'info.main', color: 'info.contrastText' }}>
          <Typography variant="h6" gutterBottom>
            💡 Tips for Better Reports
          </Typography>
          <Typography variant="body2">
            • Be specific with your topic for more focused reports
            • Include industry or domain context when relevant
            • Try topics like "Machine Learning in Finance" or "Sustainable Energy Solutions 2024"
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard; 
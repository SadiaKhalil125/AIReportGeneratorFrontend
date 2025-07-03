import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';

import {
  AutoAwesome,
  Description,
  Download,
  Security,
  Speed,
  TrendingUp,
  Verified,
  Star,
} from '@mui/icons-material';

const Home: React.FC = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      minHeight: 'calc(100vh - 64px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          {/* Hero Section */}
          <Box textAlign="center" mb={8} className="animate-fadeInUp">
            <Box sx={{ mb: 4 }}>
              <Chip 
                label="✨ AI-Powered • Professional • Instant"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  mb: 3,
                }}
              />
            </Box>
            
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ 
                color: 'white',
                fontWeight: 800,
                mb: 3,
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              Generate{' '}
              <Box 
                component="span" 
                sx={{ 
                  background: 'linear-gradient(45deg, #f093fb, #f5576c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Professional
              </Box>
              <br />
              Reports in Seconds
            </Typography>
            
            <Typography 
              variant="h5" 
              component="p" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Transform any topic into a comprehensive, AI-generated report with professional formatting and instant PDF download
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/signup"
                sx={{
                  background: 'linear-gradient(45deg, #f093fb, #f5576c)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #e084ec, #e04858)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(240, 147, 251, 0.5)',
                  },
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/login"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>

          {/* Stats Section */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 4, 
            mb: 8,
            flexWrap: 'wrap',
          }}>
            {[
              { icon: <Speed />, label: '< 60s', desc: 'Generation Time' },
              { icon: <Star />, label: '99.9%', desc: 'Success Rate' },
              { icon: <Verified />, label: '100%', desc: 'Secure' },
            ].map((stat, index) => (
              <Box 
                key={index}
                sx={{
                  textAlign: 'center',
                  color: 'white',
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  minWidth: 120,
                }}
              >
                <Avatar sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.2)', 
                  color: 'white',
                  mx: 'auto',
                  mb: 1,
                }}>
                  {stat.icon}
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  {stat.label}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {stat.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Features Section */}
          <Box sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: 4,
            p: 6,
            mb: 6,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}>
            <Typography 
              variant="h4" 
              component="h2" 
              textAlign="center" 
              mb={6}
              sx={{ 
                color: '#1a202c',
                fontWeight: 700,
              }}
            >
              Why Choose Our AI Report Generator?
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
              {[
                {
                  icon: <AutoAwesome />,
                  title: 'AI-Powered',
                  description: 'Advanced GPT models create detailed, well-researched reports tailored to your topic',
                  color: '#667eea',
                },
                {
                  icon: <Description />,
                  title: 'Professional Format',
                  description: 'Beautiful PDF reports with proper structure, formatting, and visual elements',
                  color: '#f093fb',
                },
                {
                  icon: <Download />,
                  title: 'Instant Download',
                  description: 'Get your reports immediately after generation in high-quality PDF format',
                  color: '#48bb78',
                },
                {
                  icon: <Security />,
                  title: 'Secure & Private',
                  description: 'Enterprise-grade security with encrypted data and private report generation',
                  color: '#ed8936',
                },
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className="hover-lift"
                  sx={{ 
                    height: '100%',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Avatar sx={{ 
                      bgcolor: feature.color,
                      width: 64,
                      height: 64,
                      mx: 'auto',
                      mb: 2,
                    }}>
                      {React.cloneElement(feature.icon, { sx: { fontSize: 32 } })}
                    </Avatar>
                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>

          {/* How it works */}
          <Box sx={{ 
            textAlign: 'center',
            color: 'white',
          }}>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                mb: 4,
              }}
            >
              How It Works
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
              {[
                { 
                  step: '1', 
                  title: 'Create Account',
                  description: 'Sign up for your free account in under 30 seconds',
                  icon: '🚀',
                },
                { 
                  step: '2', 
                  title: 'Enter Your Topic',
                  description: 'Simply describe what you want a report about',
                  icon: '✍️',
                },
                { 
                  step: '3', 
                  title: 'Get Your Report',
                  description: 'Download your professional PDF report instantly',
                  icon: '📄',
                },
              ].map((step, index) => (
                <Box 
                  key={index}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    },
                  }}
                >
                  <Box sx={{ fontSize: '3rem', mb: 2 }}>
                    {step.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {step.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 
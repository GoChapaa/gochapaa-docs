import React from 'react';

interface RoadmapItem {
  year: string;
  quarter: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const RoadmapTimeline: React.FC = () => {
  const roadmapData: RoadmapItem[] = [
    {
      year: '2024',
      quarter: 'Q1',
      title: 'Beta Testing',
      description: 'Beta testing with select users and initial feedback collection',
      status: 'completed'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Official Launch',
      description: 'Official launch with full marketing campaign and user onboarding',
      status: 'in-progress'
    },
    {
      year: '2024',
      quarter: 'Q3',
      title: 'BTC Lightning Network',
      description: 'Integration with Bitcoin Lightning Network for micropayments',
      status: 'planned'
    },
    {
      year: '2024',
      quarter: 'Q4',
      title: 'NFT Marketplace Pilot',
      description: 'Launch of NFT marketplace pilot program',
      status: 'planned'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: 'Mobile App Launch',
      description: 'iOS and Android mobile application launch',
      status: 'planned'
    },
    {
      year: '2025',
      quarter: 'Q3',
      title: 'P2P Asset Trading',
      description: 'Roll out of peer-to-peer asset trading features',
      status: 'planned'
    },
    {
      year: '2026',
      quarter: 'Full Year',
      title: 'Regional Expansion',
      description: 'Expansion into Nigeria, Ghana, and South Africa',
      status: 'planned'
    },
    {
      year: '2027+',
      quarter: 'Ongoing',
      title: 'Advanced Features',
      description: 'DAO governance, derivatives trading, AI-powered customer service',
      status: 'planned'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#22c55e';
      case 'in-progress':
        return '#f59e0b';
      case 'planned':
        return '#6b7280';
      default:
        return '#6b7280';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🚧';
      case 'planned':
        return '📅';
      default:
        return '📅';
    }
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>GoChapaa Roadmap</h3>
      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '30px',
          top: '0',
          bottom: '0',
          width: '2px',
          backgroundColor: '#e5e7eb',
          zIndex: 1
        }} />
        
        {roadmapData.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '30px',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Timeline dot */}
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: getStatusColor(item.status),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: 'white',
              marginRight: '20px',
              flexShrink: 0,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {getStatusIcon(item.status)}
            </div>
            
            {/* Content */}
            <div style={{
              flex: 1,
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              border: `2px solid ${getStatusColor(item.status)}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <h4 style={{
                  margin: '0',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937'
                }}>
                  {item.title}
                </h4>
                <span style={{
                  marginLeft: '12px',
                  padding: '4px 8px',
                  backgroundColor: getStatusColor(item.status),
                  color: 'white',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {item.status.replace('-', ' ').toUpperCase()}
                </span>
              </div>
              
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: 'bold'
              }}>
                {item.year} {item.quarter}
              </p>
              
              <p style={{
                margin: '0',
                fontSize: '14px',
                color: '#4b5563',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;


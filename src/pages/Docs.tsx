import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Folder, 
  File,
  Star,
  Clock,
  Users,
  MoreHorizontal,
  Edit3,
  Share2,
  Download,
  Eye
} from 'lucide-react';

interface Document {
  id: string;
  title: string;
  type: 'document' | 'folder';
  lastModified: string;
  author: string;
  size?: string;
  starred: boolean;
  shared: boolean;
  children?: Document[];
}

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedView, setSelectedView] = useState<'grid' | 'list'>('list');

  const documents: Document[] = [
    {
      id: '1',
      title: 'Project Requirements',
      type: 'folder',
      lastModified: '2 days ago',
      author: 'Sarah Chen',
      starred: true,
      shared: true,
      children: [
        {
          id: '1-1',
          title: 'Technical Specifications.pdf',
          type: 'document',
          lastModified: '2 days ago',
          author: 'Sarah Chen',
          size: '2.4 MB',
          starred: false,
          shared: true
        }
      ]
    },
    {
      id: '2',
      title: 'API Documentation.md',
      type: 'document',
      lastModified: '1 day ago',
      author: 'Mike Johnson',
      size: '156 KB',
      starred: true,
      shared: false
    },
    {
      id: '3',
      title: 'User Research',
      type: 'folder',
      lastModified: '3 days ago',
      author: 'Emily Davis',
      starred: false,
      shared: true,
      children: []
    },
    {
      id: '4',
      title: 'Meeting Notes - Q4 Planning.docx',
      type: 'document',
      lastModified: '5 hours ago',
      author: 'Alex Rodriguez',
      size: '89 KB',
      starred: false,
      shared: true
    },
    {
      id: '5',
      title: 'Brand Guidelines.pdf',
      type: 'document',
      lastModified: '1 week ago',
      author: 'Lisa Wang',
      size: '5.2 MB',
      starred: true,
      shared: false
    },
    {
      id: '6',
      title: 'Development Guides',
      type: 'folder',
      lastModified: '4 days ago',
      author: 'John Smith',
      starred: false,
      shared: false,
      children: []
    }
  ];

  const recentDocuments = documents.filter(doc => doc.type === 'document').slice(0, 4);
  const starredDocuments = documents.filter(doc => doc.starred);

  const getFileIcon = (type: string, title: string) => {
    if (type === 'folder') return Folder;
    if (title.endsWith('.pdf')) return FileText;
    if (title.endsWith('.docx') || title.endsWith('.doc')) return FileText;
    if (title.endsWith('.md')) return FileText;
    return File;
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Documents</h1>
            <p className="text-gray-600 dark:text-gray-400">Organize and share your team's knowledge</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Folder className="h-4 w-4" />
              <span>New Folder</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              <Plus className="h-4 w-4" />
              <span>New Document</span>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSelectedView('list')}
              className={`p-2 rounded-lg transition-colors ${
                selectedView === 'list'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <FileText className="h-4 w-4" />
            </button>
            <button
              onClick={() => setSelectedView('grid')}
              className={`p-2 rounded-lg transition-colors ${
                selectedView === 'grid'
                  ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              <Folder className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Access</h3>
              
              {/* Recent Documents */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent</span>
                </div>
                <div className="space-y-2">
                  {recentDocuments.map((doc) => {
                    const IconComponent = getFileIcon(doc.type, doc.title);
                    return (
                      <div key={doc.id} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <IconComponent className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{doc.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Starred Documents */}
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Starred</span>
                </div>
                <div className="space-y-2">
                  {starredDocuments.map((doc) => {
                    const IconComponent = getFileIcon(doc.type, doc.title);
                    return (
                      <div key={doc.id} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                        <IconComponent className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 truncate">{doc.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">All Documents</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900 dark:text-white">Name</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900 dark:text-white">Modified</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900 dark:text-white">Author</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900 dark:text-white">Size</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-900 dark:text-white"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc, index) => {
                      const IconComponent = getFileIcon(doc.type, doc.title);
                      return (
                        <tr 
                          key={doc.id} 
                          className={`group hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 transition-colors ${
                            index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                          }`}
                        >
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <IconComponent className={`h-5 w-5 ${
                                doc.type === 'folder' ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'
                              }`} />
                              <span className="text-sm font-medium text-gray-900 dark:text-white">{doc.title}</span>
                              <div className="flex items-center space-x-1">
                                {doc.starred && <Star className="h-3 w-3 text-yellow-500 fill-current" />}
                                {doc.shared && <Users className="h-3 w-3 text-blue-500" />}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{doc.lastModified}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{doc.author}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{doc.size || '—'}</span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                <Edit3 className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                <Share2 className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                <Download className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
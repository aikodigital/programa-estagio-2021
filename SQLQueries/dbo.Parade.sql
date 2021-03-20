USE [Aiko]
GO

/****** Object:  Table [dbo].[Parade]    Script Date: 19/03/2021 17:45:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Parade](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Latitude] [decimal](18, 10) NOT NULL,
	[Longitude] [decimal](18, 10) NOT NULL,
	[CreatedAt] [datetime] NOT NULL,
	[DisabledAt] [datetime] NULL,
 CONSTRAINT [PK_Parade] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


